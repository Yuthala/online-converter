let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //создаем новый объект для работы с сетевыми запросами
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');

    request.setRequestHeader('Content-type', 'text/plain');

    request.send(); //тело запроса

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) { //статус нашего запроса = 4 (DONE) и статус сервера 200 (OPEN)
            let data = JSON.parse(request.response).Valute.USD.Value.toFixed(2); //сохраняем в переменную data данные, полученные от сервера

            inputUsd.value = inputRub.value /  data;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
})