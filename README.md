* npm install - установка node_modules
* npm start - сборка приложения и запуск сервера
* npm run build - сборка приложения
* npm run serve - запуск сервера для раздачи из папки ./build
* npm run dev - запуск dev-сервера с hot-reload
* npm run ts:check - запуск typescript checker

Приложение для учёта расходов
* Win 10
* NodeJS v18.7.0
* npm v9.2.0

Порядок запуска приложения:
1. npm install - установка необходимых пакетов
2. npm start - сборка приложения и запуск по адресу http://localhost:3000 

Список фич:
1. Persisted-user:
    * Все данные пользователя хранятся локально
    * Польователя можно сменить (при смене все данные очищаются)
2. Список карт:
    * У каждого польователя есть список карт
    * Картам можно задать лимиты
    * Траты фильтруются по картам
