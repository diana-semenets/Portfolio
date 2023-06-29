

let weatherItem = document.querySelector('.weather-item');
let weathercard = document.querySelector('#weather-card');

let calcItem = document.querySelector('.calc-item');        
let calcCard = document.querySelector('#calc-card');
let productItem = document.querySelector('.product-item');        
let productCard = document.querySelector('#product-card');


weathercard.addEventListener('mouseover', (e) => {
    e.preventDefault();
    weatherItem.classList.add('card__active');
    weatherItem.classList.remove('weather__hidden');
} );

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target !== weatherItem) { // Если цель клика - фот, то:
        weatherItem.classList.remove('card__active'); // Убираем активный класс с фона
        weatherItem.classList.add('weather__hidden');
    }
    
}); 

calcCard.addEventListener('mouseover', (e) => {
    e.preventDefault();
    calcItem.classList.add('card__active');
    calcItem.classList.remove('weather__hidden');
} );

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target !== calcItem) { // Если цель клика - фот, то:
        calcItem.classList.remove('card__active'); // Убираем активный класс с фона
        calcItem.classList.add('weather__hidden');
    }
}); 

productCard.addEventListener('mouseover', (e) => {
    e.preventDefault();
    productItem.classList.add('card__active');
    productItem.classList.remove('weather__hidden');
} );

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target !== productItem) { // Если цель клика - фот, то:
        productItem.classList.remove('card__active'); // Убираем активный класс с фона
        productItem.classList.add('weather__hidden');
    }
}); 

