'use strict'
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

const multPositiveElements = (array) => {
    //Знайти добуток позитивних елементів.
    const mult = array.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            return accumulator * currentValue;
        }
        return accumulator
    }, 1)
    console.log(`Добуток позитивних елементів: ${mult}`)
}
const sumNotPairElements = (array) => {
    //Знайти суму непарних позитивних елементів.
    const sum = array.reduce((accumulator, currentValue) => {
        if (currentValue > 0 && currentValue % 2 != 0) {
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0)
    console.log(`Сумма непарних позитивних елементів: ${sum}`)
}
const sumPairElements = (array) => {
    //Знайти суму парних позитивних елементів.
    const sum = array.reduce((accumulator, currentValue) => {
        if (currentValue > 0 && currentValue % 2 == 0) {
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0)
    console.log(`Сумма парних позитивних елементів: ${sum}`)
}
const checkPairElements = (array) => {
    //Знайти кількість парних позитивних елементів.
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 == 0) {
            count++;
        }
    }
    console.log(`Кількість парних позитивних елементів: ${count}`)
}
const checkDontPairElements = (array) => {
    //Знайти кількість непарних позитивних елементів.
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 != 0) {
            count++;
        }
    }
    console.log(`Кількість непарних позитивних елементів: ${count}`)
}
const countsNegativeElements = (array) => {
    //Визначити кількість негативних елементів.
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    console.log(`Кількість негативних елементів: ${count}`)
}
const showMinimalElement = (array) => {
    //Знайти мінімальний елемент масиву та його порядковий номер.
    let min = 1;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
            index = i
        }
    }
    console.log(`мінімальний елемент масиву: ${min} його порядковий номер: ${index}`)
}
const showMaxElement = (array) => {
//Знайти максимальний елемент масиву та його порядковий номер.
    let max = 1;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
            index = i
        }
    }
    console.log(`максимальний елемент масиву: ${max} його порядковий номер: ${index}`)
}

const showMaxElementAndAnotherIsZero = (array) => {
//Знайти найбільший серед елементів масиву, ост альні обнулити.
    let max = 1;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
            index = i
        }
        array[i] = 0;
    }
    array[index] = max;
    console.log(`Найбільший елемент масиву: ${max} Обнулений масив: ${array}`)
}


showMinimalElement(array);
showMaxElement(array);
countsNegativeElements(array);
checkDontPairElements(array);
checkPairElements(array);
sumPairElements(array);
sumNotPairElements(array);
multPositiveElements(array);
showMaxElementAndAnotherIsZero(array);
