"use strict";

const p = document.querySelectorAll('p');
console.log(p);


// Создаем функцию
function loadScript(src) {
    const script = document.createElement ('script'); // Создаем новый элемент
    script.src = src; // Добавляем путь
    script.async = false; // Задаем булиновое значение атрибуту async
    document.body.append(script); // атрибут append добавляет скрипт в конец
}

// Загружаем скрипты по порядку
loadScript("js/test.js");
loadScript("js/some.js");