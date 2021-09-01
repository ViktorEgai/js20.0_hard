const exchangeAPI = 'https://www.cbr-xml-daily.ru/daily_json.js';

// получение элементов со страницы
const curr1 = document.getElementById('curr1'),
	curr2 = document.getElementById('curr2'),
	labelCurr1 = document.getElementById('labelCurr1'),
	labelCurr2 = document.getElementById('labelCurr2'),
	convert = document.getElementById('convert'),
	swapCurrency = document.getElementById('change'),
	selectCurr = document.getElementById('selectCurr'),
	label = document.querySelectorAll('label');

	curr2.disabled = true;
// получение данных с сервера
const getData = () => {
return fetch(exchangeAPI);
}

getData()
.then((response) => {
	if (response.status !== 200) {
		throw new Error('status not 200');
	}
	return response.json();
})
.then((data)=>{	
	const usd = data.Valute.USD.Value;
	const eur = data.Valute.EUR.Value;
	summCurrency(usd, eur);
})
.catch((error) => console.log(error));

// конвертация валюты
const summCurrency = (usd, eur) => {
	convert.addEventListener('click', () => {
		// доллары
		if (labelCurr1.textContent === 'Рубли' && 
		labelCurr2.textContent === 'Доллары') {
		curr2.value = (+curr1.value /usd).toFixed(3) ;
		}	else if (labelCurr2.textContent === 'Рубли' &&
		 labelCurr1.textContent === 'Доллары') {
			curr2.value = (+curr1.value * usd).toFixed(3);
		}	
		// евро
		if (labelCurr1.textContent === 'Рубли' && 
		labelCurr2.textContent === 'Евро') {
		curr2.value = (+curr1.value /eur).toFixed(3) ;
		}	else if (labelCurr2.textContent === 'Рубли' &&
		 labelCurr1.textContent === 'Евро') {
			curr2.value = (+curr1.value * eur).toFixed(3);
		}	
	})
}
// свап названия валют
swapCurrency.addEventListener('click', ()=> {
	let curName1 = labelCurr1.textContent; 
	let curName2 = labelCurr2.textContent; 
	labelCurr1.textContent = curName2;
	labelCurr2.textContent = curName1;
	curr1.value = '';
	curr2.value = '';	
})


selectCurr.addEventListener('change', () => {
	label.forEach( item => {
		if (item.textContent === 'Доллары' || item.textContent === 'Евро') {
			item.textContent = selectCurr.value;
		} 
	})
	curr1.value = '';
	curr2.value = '';	
})
