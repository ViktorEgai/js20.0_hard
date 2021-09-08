'use strict';
import data from './db_cities.js';

const dropdownListsDefault = document.querySelector('.dropdown-lists__list--default'),
	selectCities = document.getElementById('select-cities'),
	dropdownListSelect = document.querySelector('.dropdown-lists__list--select'),
	dropdownListAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
	allLists = document.querySelector('.dropdown-lists'),
	button = document.querySelector('.button'),
	closeButton = document.querySelector('.close-button');




//отображение всей информации о стране при клике на инпут
const showSelectedCountry = (item) => {

	const list = document.createElement('div');
	list.classList.add('dropdown-lists__col');

	const countryBlock = document.createElement('div');
	countryBlock.classList.add('dropdown-lists__countryBlock');
	countryBlock.innerHTML = `
			<div class="dropdown-lists__total-line">
				<div class="dropdown-lists__country">${item.country}</div>
				<div class="dropdown-lists__count">${item.count}</div>
			</div>`;
	list.appendChild(countryBlock);
	dropdownListSelect.appendChild(list);
	item.cities.forEach(city => {
		list.insertAdjacentHTML('beforeend', `
			<div class="dropdown-lists__line">
				<div class="dropdown-lists__city">${city.name}</div>
				<div class="dropdown-lists__count">${city.count}</div>
			</div>
			`);
	})

	backToDefaultList(list);
};

// отображение всех стран
const showCountries = (countries) => {
	const list = document.createElement('div');
	list.classList.add('dropdown-lists__col');

	countries.forEach(item => {

		// сортировка по убыванию cities.count
		item.cities.sort((a, b) => b.count - a.count);

		// создание списка стран
		const countryBlock = document.createElement('div');
		countryBlock.classList.add('dropdown-lists__countryBlock');
		countryBlock.innerHTML = `
			<div class="dropdown-lists__total-line">
				<div class="dropdown-lists__country">${item.country}</div>
				<div class="dropdown-lists__count">${item.count}</div>
			</div>
			<div class="dropdown-lists__line">
				<div class="dropdown-lists__city dropdown-lists__city--ip">${item.cities[0].name}</div>
				<div class="dropdown-lists__count">${item.cities[0].count}</div>
			</div>
			<div class="dropdown-lists__line">
				<div class="dropdown-lists__city">${item.cities[1].name}</div>
				<div class="dropdown-lists__count">${item.cities[1].count}</div>
			</div>
			<div class="dropdown-lists__line">
				<div class="dropdown-lists__city">${item.cities[2].name}</div>
				<div class="dropdown-lists__count">${item.cities[2].count}</div>
			</div>`;

		list.append(countryBlock);
		dropdownListsDefault.appendChild(list);
	});
};
showCountries(data.RU);

// возврат к дефорлотному списку
const backToDefaultList = (list) => {
	const totalLine = list.querySelector('.dropdown-lists__total-line');
	totalLine.addEventListener('click', () => {
		dropdownListSelect.classList.add('dropdown-lists__list--hide');
		dropdownListsDefault.classList.remove('dropdown-lists__list--hide');
		cleanSelectedList();
	})
};

// очистка списка с информацией о стране
const cleanSelectedList = () => {
	const list = dropdownListSelect.querySelector('.dropdown-lists__col');
	list.remove();
};

//  клик по стране
dropdownListsDefault.addEventListener('click', event => {
	const target = event.target;
	// клик на область названия страны
	if (target.matches('.dropdown-lists__total-line')) {
		dropdownListSelect.classList.toggle('dropdown-lists__list--hide');
		dropdownListsDefault.classList.add('dropdown-lists__list--hide');
		const countryName = target.children[0];
		data.RU.forEach(item => {
			if (item.country === countryName.textContent) {
				showSelectedCountry(item);
			}
		});
	}
	//  клик на имя страны
	data.RU.forEach(item => {
		if (item.country === target.textContent) {
			dropdownListSelect.classList.toggle('dropdown-lists__list--hide');
			dropdownListsDefault.classList.add('dropdown-lists__list--hide');
			showSelectedCountry(item);
		}
	});
})



// вывод всех город в один общий массив
const sortCities = () => {
	const allCities = [];
	data.RU.forEach(country => country.cities.forEach(item => allCities.push(item)))
	return allCities;
};



// очистка блока при каждом вводе
const cleanAutocomplete = () => {
	const lines = dropdownListAutocomplete.querySelectorAll('.dropdown-lists__line');
	lines.forEach(item => item.remove())
};

// ввод символов в инпут и вывод совпадений
selectCities.addEventListener('input', () => {
	const cities = sortCities();
	const countryBlock = dropdownListAutocomplete.querySelector('.dropdown-lists__countryBlock');
	dropdownListsDefault.classList.add('dropdown-lists__list--hide');
	cleanAutocomplete();

	if (selectCities.value) {

		dropdownListAutocomplete.classList.remove('dropdown-lists__list--hide');

		const regExp = new RegExp(`^${selectCities.value}{1,}`, 'gi');
		let arr = [];
		// пуш городов в новый массив
		cities.forEach(item => {
			if (item.name.match(regExp)) {
				arr.push(item)
			} 
		})
		// Совпадений не найдено
		if( arr.length === 0) {
				countryBlock.insertAdjacentHTML('beforeend', `
				<div class="dropdown-lists__line">
				<div class="dropdown-lists__city">Совпадений не найдено</div>					
				</div>`);
		};
		// вывод массива с совпадениями на страницу
		arr.forEach( item => {
			countryBlock.insertAdjacentHTML('beforeend', `
				<div class="dropdown-lists__line">
					<div class="dropdown-lists__city">${item.name}</div>
					<div class="dropdown-lists__count">${item.count}</div>
				</div>`);
		})

	} else {
		dropdownListAutocomplete.classList.add('dropdown-lists__list--hide');
	}

	button.classList.add('isDisabled');

});

// отображение страны или города в инпуте при клике на имя в списке
const copyCityToInput = (target) => {
	data.RU.forEach(item => {
		item.cities.forEach(city => {
			if(city.name === target.textContent){
				selectCities.value = target.textContent;
				button.setAttribute('href', city.link);
				if (target.closest('.dropdown-lists__list--default')) {
						dropdownListsDefault.classList.add('dropdown-lists__list--hide');
				};
				if (target.closest('.dropdown-lists__list--select')) {						
					dropdownListSelect.classList.add('dropdown-lists__list--hide');
				};			
				if (target.closest('.dropdown-lists__list--autocomplete')) {		
					dropdownListAutocomplete.classList.add('dropdown-lists__list--hide');
				};
				selectCities.focus();
				button.classList.remove('isDisabled');
				closeButton.style.display = 'block';
			} 
		})
	})
};
// клик по названию города
allLists.addEventListener('click', (event) => {
	const target = event.target;	
	copyCityToInput(target);
});

// клик по кнопке крестика 
closeButton.addEventListener('click', () => {
	selectCities.value = '';
	closeButton.style.display = 'none';
	button.classList.add('isDisabled');
})

// клик по инпуту
selectCities.addEventListener('click', () => {
	selectCities.value = '';
	dropdownListsDefault.classList.toggle('dropdown-lists__list--hide');
	dropdownListSelect.classList.add('dropdown-lists__list--hide');
	dropdownListAutocomplete.classList.add('dropdown-lists__list--hide');

	if (dropdownListSelect.children[0]) cleanSelectedList();
})