// --------- Выводит сумму таблицы
let inputs = document.getElementsByClassName('js-input');
let numbers = [];
let sum = document.getElementById('js-sum');

for (let i = 0; i < inputs.length; i++) {
    numbers.push(inputs[i].value);

    inputs[i].addEventListener('input', function () {
        numbers[i] = this.value;
        updateResults();
    });
}
updateResults();

function updateResults() {
    sum.value = sumArr(numbers);
}

function sumArr(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += +arr[i];
    }
    return x;
}
// --------- Выводит кнопкой финишную цену

let result = document.getElementById('js-result');
let btn = document.getElementById('js-btn');
let total = 0;

btn.addEventListener('click', function () {

    if (sum.value > 1 && sum.value <= 7499) {
        total = sum.value * 4;
    }
    else if (sum.value >= 7500 && sum.value <= 19999) {
        total = sum.value * 3;
    }
    else if (sum.value >= 20000 && sum.value <= 49999) {
        total = sum.value * 2.5;
    }
    else if (sum.value >= 50000 && sum.value <= 149999) {
        total = sum.value * 2;
    }
    else if (sum.value >= 150000 && sum.value <= 449999) {
        total = sum.value * 1.5;
    }
    else if (sum.value >= 500000) {
        total = sum.value * 0.75;
    }
    result.value = numberWithSpaces(total);
});
// ----------- Разделение числа на разряды

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}