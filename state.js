(function () {
    'use strict';

    function addKeyboardSupport() {
        // Находим поисковое поле
        var searchInput = document.querySelector('.search-input-selector'); // Измените селектор на актуальный

        if (searchInput) {
            // Добавляем обработчик событий для клавиатуры
            searchInput.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    // Обработчик нажатия Enter
                    performSearch(searchInput.value);
                }
            });
        }
    }

    function performSearch(query) {
        // Вызов функции поиска с введенным значением
        // Эта функция может изменяться в зависимости от реализации поиска в LampaTV
        console.log("Performing search for: " + query);
        // Добавьте здесь код для выполнения поиска
    }

    function init() {
        if (window.appready) {
            addKeyboardSupport();
        } else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type === 'ready') addKeyboardSupport();
            });
        }
    }

    // Инициализация расширения
    init();
})();
