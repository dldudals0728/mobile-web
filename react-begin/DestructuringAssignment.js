/**
 * 구조분해할당
 */

const candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  //   화살표 함수는 안되고, 익명 함수는 된다? ==> 익명함수, 화살표 함수는 this가 없다 ==> 오류!!
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};

const getCandy = candyMachine.getCandy();
const count = candyMachine.status.count;

console.log(getCandy);
console.log(count);

// const candyMachine = {
//   status: {
//     name: "node",
//     count: 5,
//   },
//   getCandy() {
//     this.status.count--;
//     return this.status.count;
//   },
// };

// const {
//   getCandy,
//   status: { count },
// } = candyMachine;
// console.log(getCandy());
// console.log(count);

// const array = ["node.js", {}, 10, true];
// const [node, obj, , bool] = array;
// console.log(node);
// console.log(obj);
// console.log(bool);
