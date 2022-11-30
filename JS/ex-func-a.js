func = function () {
  console.log("1");
};

func = function () {
  console.log("2");
};

func();

// *** 익명 함수가 "무조건" 선언적 함수를 덮어 쓴다! 결국 익명 함수가 남음
