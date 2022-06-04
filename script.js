//1. Напишите программу, которая считает **количество секунд** в часе.

let myClock = prompt(" введите время (число)");
let myMunut = 3600;
let result = myClock * myMunut;
console.log(result);
//2. Создайте переменную `myNumber` и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода **alert.**
let myNumber = 2022;
alert(myNumber);

//3. Спросите имя пользователя с помощью метода **prompt**. Выведите сообщение на страницу с помощью **`document.write`** : **“Рад знакомству {имя пользователя}!”**.

let name = prompt("Как вас зовут?  ");
document.write(`Рад знакомству ${name}!`);

//4. Даны два числа `a, b`. Написать программу, которая считает среднее арифметическое двух чисел.*/

let a = parseInt(prompt("Введите число", ""));
let b = parseInt(prompt("Ещё одну", ""));
let c = (a + b) / 2;
console.log(c);
//5. Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.
// Пример: Пользователь вводит число 10. Программа выводит число 11.*
let number = prompt("Введите либой число");
number++;
console.log(number);

/*6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
    - Имя
    - Возраст
    - Список друзей
    - Почтовый адрес
    - Электронный адрес*/

const user = {
  name: "Indira",
  age: 20,
  friends: ["Aklai", "Elina", "Gulzat"],
  adres: "Kyrgyzstan",
  email: "toichubekovna.02@gmail.com",
};

/*7. Создайте объект описывающий блог-пост на сайте:
    - Название поста
    - Автор поста
    - Дата публикации поста
    - Тело поста (содержит текст поста)
    - Картинка поста (содержит url картинки)
    - Теги поста*/
const post = {
  title: "Books",
  Aftor: "Sharshebaeva I.",
  Date: 2022,
  body: "Books with history and love",
  picture:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ukrgate.com%2Feng%2F%3Fp%3D7087&psig=AOvVaw0HOOi7v0nxpHNq3APr0cOw&ust=1654369438346000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCIhOb8kfgCFQAAAAAdAAAAABAI ",
  tag: "books",
};

//8. Создайте массив с именами пользователей.
let users = ["Indira", "Aidana", "Jasmin", "Meerim"];

//9. Создайте массив с url адресами на разные картинки.
let imgUrl = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Fculture%2Fcultural-comment%2Fkirkus-reviews-plight-of-the-problematic-book-review&psig=AOvVaw0HOOi7v0nxpHNq3APr0cOw&ust=1654369438346000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCIhOb8kfgCFQAAAAAdAAAAABAN",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aarp.org%2Fentertainment%2Fbooks%2Finfo-2021%2Fauthors-pick-top-books.html&psig=AOvVaw0HOOi7v0nxpHNq3APr0cOw&ust=1654369438346000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCIhOb8kfgCFQAAAAAdAAAAABAf",
];

//10. Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.
let blogPost = {
  title: "Books",
  aftor: "Sharshebaeva Indira",
  date: 2022,
  body: " Books wiht history",
  picture:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Fculture%2Fcultural-comment%2Fkirkus-reviews-plight-of-the-problematic-book-review&psig=AOvVaw0HOOi7v0nxpHNq3APr0cOw&ust=1654369438346000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCIhOb8kfgCFQAAAAAdAAAAABAN",
  tag: "#manybooks",
};
