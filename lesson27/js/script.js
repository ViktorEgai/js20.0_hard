const filterByType = (type, ...values) => values.filter(value => typeof value === type), //фукнция фильтрует введенные данные values сравнивая каждый value из values с типом данных type

	hideAllResponseBlocks = () => { //объявление функции, которая скрывает все элементы с классом dialog__response-block
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); //присвание массива элементов с классом .dialog__response-block переменной responseBlocksArray
		responseBlocksArray.forEach(block => block.style.display = 'none'); // с помощью цикла применяется css display: none для каждого элемента в массиве responseBlocksArray
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => { // объявление функции с 3мя аругментами, которые будут передаваться при вызове данной функции
		hideAllResponseBlocks(); // вызов функции hideAllResponseBlocks()
		document.querySelector(blockSelector).style.display = 'block'; // применение css display: block для агрумента blockSelector
		if (spanSelector) {  // условие проверяет наличие аргумента spanSelector. вернет true или false 
			document.querySelector(spanSelector).textContent = msgText; // если spanSelector есть, то ему присвоется строка msgText и она выведется на страницу
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), // объявление функции showError с аргументом msgText, в которой объявлена функция showResponseBlock и в нее передаются соответсвующие аргументы

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),	 // объявление функции showResults с аргументом msgText, в которой объявлена функция showResponseBlock и в нее передаются соответсвующие аргументы

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // объявление функции showNoResults  в которой объявлена функция showResponseBlock и в нее передается аргумент blockSelector = .dialog__response-block_no-results

	tryFilterByType = (type, values) => { // Объявление функции tryFilterByTypeс аргументами type и values 
		try { // отлавливает ошибки в коде, если их нет, то сработает код внутри try 
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); // Объявление переменной valuesArray. К ней присвается  функция filterByType через метод eval, которая объединяет все значения функции filterByType с помощью join через запятую в одну строку
			const alertMsg = (valuesArray.length) ?// Объявление переменной alertMsg. если valuesArray не пуст
				`Данные с типом ${type}: ${valuesArray}` : // то в перменную alertMsg присвоется строка Данные с типом ${type}: ${valuesArray}
				`Отсутствуют данные типа ${type}`; // иначе в alertMsg присвоется строка Отсутствуют данные типа ${type}
			showResults(alertMsg); // вызовается функция showResults и передается переменная  alertMsg как аргумент 
		} catch (e) { //если есть ошибки - отработает код внутри catch 
			showError(`Ошибка: ${e}`); // вызовается функция showError которая будет выводить ошибку на страницу
		}
	};

const filterButton = document.querySelector('#filter-btn'); // переменная filterButton, которой присваевается элемент с id = filter-btn
 
filterButton.addEventListener('click', e => { //отбраточик события клик по элементу  filterButton
	const typeInput = document.querySelector('#type'); // переменная typeInput, которой присваевается элемент с id = type
	const dataInput = document.querySelector('#data');// переменная dataInput, которой присваевается элемент с id = data

	if (dataInput.value === '') { // если dataInput пуст, то отработает код ниже
		dataInput.setCustomValidity('Поле не должно быть пустым!'); // к dataInput применяется стандартный валидатор , который будет выводить на текст "Поле не должно быть пустым!" рядом с элеметом dataInput
		showNoResults(); // dspjd функции showNoResults
	} else { // если dataInput не пуст, то отработает код ниже
		dataInput.setCustomValidity(''); // к dataInput применяется стандартный валидатор, нов него передана пустая строка, поэтому он не будет отображаться на странице
		e.preventDefault(); // отключается стандартное поведение браузера
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); // вызов функции tryFilterByTypе , в которую передаются value переменных typeInput и  dataInput как аргументы,  в то же время с помощью метода trim удаляются все пробелы перед строкой и после неё
	}
});

