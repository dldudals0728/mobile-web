function func() {
  console.log("2");
}

func = function () {
  console.log("1");
};

func();
