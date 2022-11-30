// var: 선언, 할당, 재선언, 재할당 모두 가능. but 첫번째, 두번째, 세번째 줄 모두 다른 주소로 할당된 것. test, test2가 남아있음
/*
var a = "test";
var a = "test2";
a = "test3";
console.log(a);
*/

// let: 재선언 불가! 할당 및 재할당은 가능
/*
let a = "test";
let a = "test2";
a = "test3";
console.log(a);
*/

// const: 재선언, 재할당 모두 불가. (및줄은 안생기는데 render 시 오류)
const b = "test";
// const b = "test2";
// b = "test3";
console.log(b);
