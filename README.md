# Тестовое задание от компании WelbeX
https://welbex-test-40cd7.web.app/

1) Таблица должна содержать 4 колонки:
- Дата
- Название
- Количество
- Расстояние

2) Таблица должна иметь сортировку по всем полям кроме даты.
Фильтрация должна быть в виде двух выпадающих списков и текстового поля:
- Выбор колонки, по которой будет фильтрация
- Выбор условия (равно, содержит, больше, меньше)
- Поле для ввода значения для фильтрации

3) Таблица должна содержать пагинацию

Вся таблица должна работать без перезагрузки страницы.

# Реализация
- Реализовано на Vue.js
- Таблица с данными подключена к БД на firebase
- Есть возможность добавить строки данных (запись) в модальном окне
- Фильтрация происходит на лету (нет кнопки для старта фильтрации)
- Добавлена кнопка сброса установленных значений фильтрации (появляется при наличии значений как минимум в одном поле)
- Добавлена возможность удаления любой записи в таблице
- Hosting на firebase  https://welbex-test-40cd7.web.app/
---------------------------------------------------------------
