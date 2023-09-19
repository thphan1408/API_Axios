// Bất đồng bộ
// Event loop

console.log("a");

setTimeout(function () {
  console.log("b");
}, 1000);

console.log("c");

setTimeout(function () {
  console.log("d");
}, 1000);

console.log("e");

// Promise: sẽ giải quyết vấn đề về callback hell
// Promise sẽ có 3 trạng thái: pending, relsove, reject.

var sum = 10;
const promiseA = new Promise(function (resolve, reject) {
  // Thực thi các tác vụ bất đồng bộ
  setTimeout(function () {
    if (sum > 10) {
      reject("fail");
    }

    resolve("pass");
  }, 1000);
});

const promiseB = function (param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param === "fail") {
        reject("test fail");
      }

      resolve("test pass");
    }, 1000);
  });
};

// Đối tượng promise cung cấp 2 phương thức: then và catch
// Khi promise chạy thành công: trả kết quả ở then
// Khi promise chạy thất bại: trả kết quả ở catch
promiseA
  .then(function (response) {
    console.log("response: ", response);

    return promiseB(response);
  })
  .then(function (res) {
    console.log("res: ", res);
  })
  .catch(function (err) {
    console.log("err: ", err);
  });

// AXIOS
axios({
  url: "https://6500588d18c34dee0cd4bfa3.mockapi.io/products",
  method: "GET",
})
  .then(function (res) {
    console.log("res: ", res);
  })
  .catch(function (err) {
    console.log("err: ", err);
  });
