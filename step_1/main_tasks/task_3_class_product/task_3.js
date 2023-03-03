"use strict"
// Задача 3:

// 1) Создать класс данных "Товар"
// С полями:
// Название
// Цена
// Количество
// Описание

// 2) Наполнить массив объектами такого класса.

// 3) Написать метод, который получает строку вида:
// "name-contains-fd&price-=2-&quantity->5&description-ends-abc"
// "name-starts-fd&quantity-=5"
// На выходе возвращает массив, только с подходящими объектами
// возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)

// Создадим класс "Товар"
class Product {

    // Создадим переменные класса
    static instances;

    constructor(name,price,quantity,description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;

        Product.instances.push(this);
    }

    // Создадим метод для поиска товара, по строкам вида:
    // "name-contains-fd&price-=2-&quantity->5&description-ends-abc"
    // "name-starts-fd&quantity=5"
    static searchFilter() {

        // создадим хранилище для объектов найденных нашими фильтрами
        this.arrResultStringNotFiltered = [];

        // отведем место для хранения итоговых результатов поиска (пока тут пусто)
        let arrTotalResult = []

        // создадим хранилище функций для строчных фильтров
        this.objFiltersStrings = {
            name: {
                contains : (e) => e.name.includes(this.arrSecondFilter[2]),
                starts : (e) => e.name.startsWith(this.arrSecondFilter[2]),
                ends : (e) => e.name.endsWith(this.arrSecondFilter[2])
            },
            description : {
                contains : (e) => e.description.includes(this.arrSecondFilter[2]),
                starts : (e) => e.description.startsWith(this.arrSecondFilter[2]),
                ends : (e) => e.description.endsWith(this.arrSecondFilter[2])
            }
        };

        // создадим хранилище функций для числовых фильтров
        this.objFiltersNumeric = {
            price: {
                func: (e) => {
                    let comparisonStr = e.price.toString() + this.oper.toString()
                    const newFunction = new Function(`return ${comparisonStr}`);
                    return newFunction() ;
                }
            },
            quantity: {
                func: (e) => {
                    let comparisonStr = e.quantity.toString() + this.oper.toString()
                    const newFunction = new Function(`return ${comparisonStr}`);
                    return newFunction() ;
                }
            },
        };

        // Создадим переменную для хранения количества примененных фильтров
        let countStrFilters = 0
        let searchString = prompt("Введите строку с фильтрами вида: `name-contains-cup&price-=2&quantity->5&description-ends-abc`","all");
        if (searchString === "all") // если был введен фильтр all, выведем все объекты
        {
            // пройдемся по объектам класса продукт и добавим их результирующий архив
            for (let product of Product.instances)
            {
                arrTotalResult.push(JSON.stringify(product.name));
            }
        }
        else
        {
            // разбиваем строку на первичные фильтры
            let arrFirstFilter = searchString.split('&');

            // пройдемся по массиву с первыми фильтрами(вида "name-contains-fd")
            for (let firstFilter of arrFirstFilter )
            {
                // получаем вторичные фильтры
                this.arrSecondFilter = firstFilter.split('-');

                // проверяем является ли текущий фильтр строчным(он должен состоять из 3х элементов)
                if (this.arrSecondFilter.length == 3)
                {
                    // Проверяем известен ли нам этот строчный фильтр
                    if (this.arrSecondFilter[0] in this.objFiltersStrings)
                    {
                        // пройдемся циклами по объекту с возможными функциями для строчных фильтров this.objFiltersStrings
                        for (let funcsKey in this.objFiltersStrings)
                        {
                            for (let funcsValues in this.objFiltersStrings[funcsKey])
                            {
                                if (funcsKey == this.arrSecondFilter[0] && funcsValues == this.arrSecondFilter[1])
                                {
                                    // фильтруем:
                                    countStrFilters++
                                    const arrItemName = Product.instances.filter(this.objFiltersStrings[funcsKey][funcsValues]);
                                    for(let element of arrItemName)
                                    {
                                        this.arrResultStringNotFiltered.push(JSON.stringify(element.name))
                                    }
                                }
                            }
                        }
                    }
                    else alert('Неизвестный строчный фильтр!');
                }

                // проверяем является ли текущий фильтр численным(он должен состоять из 2х элементов)
                // quantity->=5&price-<15
                else if (this.arrSecondFilter.length === 2)
                {
                    // проверяем известен ли нам этот численный фильтр
                    if (this.arrSecondFilter[0] in this.objFiltersNumeric)
                    {
                        // присвоим переменную для числовых полей объекта класса Product
                        let productFieldNumeric = this.arrSecondFilter[0]

                        //обработаем знак равенства, он требует двойного знака
                        if (this.arrSecondFilter[1][0]==='=')
                        {
                            this.oper = '='+this.arrSecondFilter[1]
                            //alert(`Oper now:   ${(this.oper)}`)
                        } else this.oper = this.arrSecondFilter[1]

                        // фильтруем:
                        countStrFilters++
                        let arrItemName = Product.instances.filter(this.objFiltersNumeric[productFieldNumeric]['func']);
                        for(let element of arrItemName)
                        {
                            this.arrResultStringNotFiltered.push(JSON.stringify(element.name))
                        }
                    }
                    else alert('Неизвестный числовой фильтр!');
                }
                else alert('Неизвестный фильтр!')
            }
        }

        // здесь будем хранить имена продуктов которые были найдены отдельными фильтрами
        let arrNamesOfProductsFound = []

        // отбросим кавычки от имен продуктов
        for (let names of this.arrResultStringNotFiltered)
        {
            arrNamesOfProductsFound.push(names.replace(/'|"|`/g, ''));
        }

        // подсчитаем сколькими фильтрами был найден конкретный продукт
        let objResults = arrNamesOfProductsFound.reduce(function(acc, el)
        {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});
        //alert(JSON.stringify(objResults))

        // найдем имена товаров, которые были найдены всеми фильтрами независимо друг от друга,
        // каждый из них был найден столько раз, сколько фильтров было применено к нашим продуктам
        for (let namesRes in objResults)
        {
            if (objResults[namesRes] == countStrFilters)
            {
                arrTotalResult.push(namesRes)
            }
        }

        // выведем элементы из массива с результатами, в лексикографическом порядке (если они там есть)
        if (arrTotalResult.length) {alert(`Результат поиска по вашему запросу: ${arrTotalResult.sort()}`)} else alert('Продуктов, удовлетворяющих всем условиям не найдено!')
    }
}

// Создадим объекты класса "Товар":
Product.instances = [];
let cup = new Product('cup', 14, 5, "Tea cup with handle");
let notebook = new Product('notebook', 35, 18, "lined notebook");
let juice = new Product('juice', 8, 10, "Bottle with orange juice");
let cupcake = new Product('cupcake', 22, 8, "Tasty cupcake");
let shoes = new Product('shoes', 13, 4, "Nice pair of shoes");

Product.searchFilter();

