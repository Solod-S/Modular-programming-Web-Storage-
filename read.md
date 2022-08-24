# js-22

- Терминал
  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `control + ~`
    - `view > teminal`
    - через палитру `command + shift + p`
  - Основные полезные команды
    - путь (pwd)
    - лист (ls) (ls -l подробно + ls -la скрытые) (ls и указать папку в которой нужно чета глянуть)
    - навигация (cd)
    - очистка `clear` или `control + l`
    - создание файлов (touch)
    - создание папок (mkdir)
    - переименование/перемещение (mv)
    - удаление (rm)
    - удаление папки в которой лежат файлы (rm -rf)
    - git help имя команды (чтобы выдать справку)
      /////////
  - Node.js и npm ---------
  - node -v (проверка версии ноды)
    -npm -v (проверка версии пакетного менеджера)
  - node + имя файла для запуска js файла (node index.js)
  - установка
  - инициализация и package.json
  - [npmjs.com](https://www.npmjs.com/)
    /////////
  - работа с пакетами
    - инициализация проекта (npm init || npm init -y || npm init -yes) (один раз обычно делаем)
    - установка библиотеки (npm i или npm instal + имя пакета joi)
    - удаление библиотеки (npm remove + имя пакета joi)
      https://www.npmjs.com/ - тут берем пакеты
    - добавляем папку node_modules/ в файлик .gitignore
    - удаление
  - CommonJS модули
  - npm-скрипты (находяться в package.json ==> scripts) запускаем npm run "имя скрипта" (если test или start то можно без start);
    - pre и post (предзапуск скрипта) ( запуск доп скрипта перед стартом "start": "node index.js",
      "prestart": "node index.js" + запуск доп скрипта после старта "poststart": "node index.js")
      - если удалил папку с модулями или кто то скачал себе но без модулей твой проект (npm i или npm instal === оно скачает все модули из зависимости)
- Транспиляция кода
  - [Babel](https://babeljs.io/)
    https://babeljs.io/setup#installation
    1 npm install --save-dev @babel/core @babel/cli (--save-dev чтобы как по умолчанию оно не уходило в зависимость продакшена, а оставалось только в зависимости разработки "devDependencies" вместо "dependencies")
    2 "build": "babel app -d build" ==> взять из папки app, закинуть в папку build
    3 npm install @babel/preset-env --save-dev ставим пакетик с пресетом сетингов
    4 создаем файлик настроек babel.config.json в корне с настройкой
    {
    "presets": ["@babel/preset-env"]
    }
  - CLI и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist)
- [Сборщик Parcel](https://parceljs.org/)
  1 npm install parcel-bundler --save-dev ставим парсель
  2 скрипты в package.json
  "start": "parcel",
  "build": "parcel build"
  3 создаем src/index.html + index.js (который подвязываем в штмл)
  https://parceljs.org/getting-started/webapp/
  4 добавляем в скрипт путь к файлу html
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html"
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) експорт и импорт (експортировать по дефолту можно только что-то одно)
  - Именованный (named) експорт и импорт
  - Импорт пространства имён (namespace)
