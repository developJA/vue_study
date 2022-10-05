/* 호이스팅 */
var test = function(){
    // 함수 선언식
}

function test(){
    // 함수 표현식
}
// 함수 선언식만 호이스팅이 일어난다. 함수 표현식은 안된다.

/* let 과 const */
var sum = 0;
for(let i=0;i<=5;i++){
    sum = sum +i;
}
console.log(sum);   // 15
console.log(i);     // 6

let sum = 0;
for(let i=1;i<=5;i++){
    sum = sum +i;
}
console.log(sum);   // 15
console.log(i);     // Uncaught TypeError

const a = {};
a.num = 5;

console.log(a); // {num : 5}

/* enhanced Object Literals */
// 1. 객체의 속성을 메서드로 사용할때 function 예약어를 생략하고 생성가능
// ES5
var dictionary = {
    lookup : function(){
        console.log('found sth');
    }
}
// ES6
var dictionary = {
    lookup (){
        console.log('found sth');
    }
}

// 2. 객체의 속셩명과 값이 동일할 때 아래와 같이 축약가능
var figurue = 10;
// ES5
var dictionary = {
    figurue : figurue,
}
// ES6
var dictionary = {
    figurue
}

/* Modules */
// 모듈화 :  코드를 특정 기능이나 로직 단위로 구분하여 각각의 모듈과 관리하는 것
// 1. 네임스페이스 
var nameSpaceA = {
    num : 10
}
console.log(nameSpaceA.num);

// 2. export, import
// ./app/login.js
export const id = "test";
// ./main.js
import {id} from './app/login.js';
id;

// 3. defualt export


