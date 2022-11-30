let arr1 = [1, 2, 3, 4, 5];

let arr2 = ["h", "e", "1", "l", "o"];

let arr3 = [1, "h", 2, "i"];

let arr4 = [true, 1, undefined, false, "h", 2, null, "i"];

console.log(arr1[0]);
console.log(arr2[1]);
console.log(arr3[2]);
console.log(arr4[3]);

let obj1 = { a: "apple", b: "banana", c: "carrot" };

let obj2 = { a: 1, b: 2, c: 2 };

let obj3 = { a: "hello", b: 100, c: [1, 2, 3, 4] };

let obj4 = {
  a: { a1: 1, a2: 2 },
  b: { b1: 3, b2: 4 },
  c: { c1: 5, c2: 6 },
};

// Object 사용 시, key값을 선언할때는 "" 없이 선언하지만, 인덱싱으로 접근할때는 ""를 사용하여 접근한다.
console.log(obj1["a"]);
console.log(obj2.a);
console.log(obj3["c"]);
console.log(obj4.c.c2);
