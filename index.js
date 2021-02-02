/*
console.log('Im Working. Im JS. Im Beautiful. Im worth it');

a = 221;
b = a -5;
console.log(b);

Create 생성
Initialize 초기화
Use 사용

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a)

const a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
TypeError: Assignment to constant variable.
*/

// 항상 변수 선언의 default 값은 const.
// 이후 let 을 사용할 수 있도록

// ----------------------------------------------

/*
String
const what = jungho
ReferenceError : jungho is not defined
const what = "jungho";
console.log(what);
*/

/*
// Boolean
const wat = true;
/*

/*
// Number
const wat = 27;
/*

/*
// Float
const wat = 55.1
*/

/*
// Array
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(dayOfWeek);
console.log(dayOfWeek[2])


// Object
const jungInfo = {
    name:"Jungho",
    age:"28",
    gender:"Male",
    isHansome: true
}

console.log(jungInfo.gender)

// const value is changed
jungInfo.gender = "Female"

console.log(jungInfo)
console.log(jungInfo.gender)
*/

/*
// `` 백틱의 사용
function sayHello(name, age) {
    // console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}
*/

// return 과 console.log 의 차이
// function sayHello(name, age) {
//     // console.log(`Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} ye/ars old`;
// }

// const greetJungho = sayHello("Jungho", 28) 

// console.log(greetJungho)


// const calculator = {
//     plus: function(a, b) {
//         return a + b;
//     }
// }

// const plus = calculator.plus(5, 5)
// console.log(plus);


// --------------------------------------------------
/*
// const title = document.getElementById("title"); // 상수는 같은 이름을 두 개 이상 가질 수 없다.
const title = document.querySelector("#title");

// DOM (Document Object Model)
console.log(title);

// JS는 HTML 파일을 건드리지 않고 HTML태그를 DOM객체로 만들 수 있고, 그 값을 바꿔서 화면에 출력시킬 수 있다.
title.innerHTML = "Hi! From JS";
title.style.color = 'red';
document.title = 'I own you now';


function handleResize(){
    console.log("I have been resized");
}

// window.addEventListener("resize", handleResize()); // 지금 바로 호출
// window.addEventListener("resize", handleResize); // 이벤트가 발생했을 때 호출

function handelClick(){
    title.style.color = 'blue';
}

title.addEventListener("click", handelClick);
*/
// --------------------------------------------------

// if (10 === 5){
//     console.log('hi');
// } else if ("10" === "10"){
//     console.log('lalala');
// } else {
//     console.log('ho');
// }

// 피연산자
// && = and 
// || = or


// const age = prompt("How old are you?"); // prompt는 이제는 자주 사용하지는 않는다. 별로 좋지 않은 방식

// // console.log(age);

// if (age > 18){
//     console.log('you can drink');
// } else {
//     console.log('you cant');
// }


// event
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     // console.log(title.style.color);
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick); // 다양한 이벤트를 사용할 수 있다. click..doubleclick.. enter... mouseenter... 
//     // 항상 MDN을 통해서 reference 를 참고할 것
// }

// init();

// function handleOffline(){
//     console.log("bye bye")
// }

// function handleOnline(){
//     console.log("Welcome back")
// }

// window.addEventListener("offline", handleOffline)
// window.addEventListener("online", handleOnline)

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     title.classList.toggle(CLICKED_CLASS);
//     // const hasClass = title.classList.contains(CLICKED_CLASS)
//     // if (hasClass){
//     //     title.classList.remove(CLICKED_CLASS);
//     // } else {
//     //     title.classList.add(CLICKED_CLASS);
//     // }
// }

// function init(){
//     title.addEventListener("click", handleClick);
// }
// init();
