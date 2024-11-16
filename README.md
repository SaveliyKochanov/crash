# CRASH

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами

Важные файлы:

- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.css — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Инструкция по сборке и запуску

После клонирования проекта из репозитория нужно установить зависимости:

```
npm install
```

Для запуска проекта в режиме разработки выполнить команду:

```
npm run start
```

или

```
yarn
yarn start
```

## Сборка

Для сборки проекта в продакшен выполнить команду:

```
npm run build
```

или

```
yarn build
```

## Данные и типы данных, используемые в приложении

- Товар

```
export interface IProduct {
	id: string
	category: string
	title: string
	src: string
	price: string
}
```

---

- Интерфейс для модели данных продуктов

```
export interface IProductsModel {
	products: IProduct[]
	addProduct: (data: string) => IProduct
	removeProduct: (id: string) => void
}

```

## Архитектура

