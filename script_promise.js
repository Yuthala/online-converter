
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    inputEur = document.getElementById('eur'),
	dataUSD = 0.0,
	dataEUR = 0.0;

let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest(); //создаем новый объект для работы с сетевыми запросами
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');

    request.setRequestHeader('Content-type', 'text/plain');

	request.onload = function() {
		if (request.readyState === 4 && request.status == 200) {
			resolve(this.response);
		} else {
			let error = new Error(this.statusText);	
			error.code = request.status;
			reject(error);
		}	
	};

	request.onerror = function() {
		reject(new Error("network error"));
	};

    request.send(); //тело запроса
	});

promise.then(
    result => {
		dataUSD = JSON.parse(result).Valute.USD.Value;//USD
    	dataEUR = JSON.parse(result).Valute.EUR.Value;//EUR
	},
	
    error => console.log(error)
);

inputRub.addEventListener('input', () => {
	inputUsd.value = Number(inputRub.value / dataUSD).toFixed(2);
	inputEur.value = Number(inputRub.value / dataEUR).toFixed(2);
});


