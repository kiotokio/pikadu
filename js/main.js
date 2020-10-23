// Создаем переменные в которую кладем кнопку меню и само меню
let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

// Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
    event.preventDefault();             // Отменяем станадратное поведение по клику на ссылку
    menu.classList.toggle('visible');   // Вешаем класс на меню при клике по кнопке
})