# DigitalSkills2021
For Kazan Digital Skills
____
Для просмотра готового продукта воспользуйтесь размещенным на хостинге проектом
http://andreifarafonow.duckdns.org:81/checks/auth.html

1) Переходим на вкладку Авторизации
Логин: JohnDoe
Пароль: 123456.

2) Нажимаем + и фотографируем чек либо выбираем из галереи.

3) Нажимаем "Распознать чек".

4) После небольшой паузы в редактируемых полях "Сумма" и "Дата" появится информация из чека.

5) Для сохранения нажимаем "Отправить данные".
____
#Installation steps

_______________
npm install - install dependencies for the project
_______________

configure .env as .env example with your postgres credentials

_______________
configure src/config/config.json with your pg credentials

_______________
npm run migrations-up

_______________
npm run seeds-up
_______________
npm start


