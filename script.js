let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    inputEur = document.getElementById('eur');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //создаем новый объект для работы с сетевыми запросами
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');

    request.setRequestHeader('Content-type', 'text/plain');

    request.send(); //тело запроса

    // inputRub.addEventListener('input', () => {
    //     let request = new XMLHttpRequest(); //создаем новый объект для работы с сетевыми запросами
    //     request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
    
    //     request.setRequestHeader('Content-type', 'text/plain');
    
    //     request.send(); //тело запроса

    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status == 200) { //статус нашего запроса = 4 (DONE) и статус сервера 200 (OPEN)
    //          //сохраняем в переменную data данные, полученные от сервера
    //         let dataUSD = JSON.parse(request.response).Valute.USD.Value;//USD
    //         let dataEUR = JSON.parse(request.response).Valute.EUR.Value;//EUR
    //         inputUsd.value = Number(inputRub.value /  dataUSD).toFixed(2);
    //         inputEur.value = Number(inputRub.value /  dataEUR).toFixed(2);
    //     } else {
    //         inputUsd.value = "something's wrong...";
    //         inputEur.value = "something's wrong...";
    //     }
    // });

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status == 200) { //статус нашего запроса = 4 (DONE) и статус сервера 200 (OPEN)
             //сохраняем в переменную data данные, полученные от сервера
            let dataUSD = JSON.parse(request.response).Valute.USD.Value;//USD
            let dataEUR = JSON.parse(request.response).Valute.EUR.Value;//EUR
            inputUsd.value = Number(inputRub.value /  dataUSD).toFixed(2);
            inputEur.value = Number(inputRub.value /  dataEUR).toFixed(2);
        } else {
            inputUsd.value = "something's wrong...";
            inputEur.value = "something's wrong...";
        }
    });
})

