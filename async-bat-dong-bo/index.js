/**

javascript ~ single thread

code đồng bộ   ~ chạy theo  quy tắc từ trên xuống dưới

code bất đồng bộ  ( new ) ~ event loop ~ sẽ được chạy sau khi code đồng bộ chạy hết

code bất đồng bộ: setTimeOut, axios (api)


setTimeOut ~ delay
 */

console.log(1);

setTimeout(function () {
  console.log("3s");
}, 10000);

setTimeout(function () {
  console.log("1s");
}, 0);
console.log(3);

// Promise : pendding , resolve ( success ), reject ( fail )
// https://dummyjson.com/todos
// axios().then().catch()

axios({
  url: "https://dummyjson.com/todos",
  method: "GET",
})
  .then(function (res) {
    console.log("😀 - response", res);
  })
  .catch(function (err) {
    console.log("😀 - error", err);
  })
  .finally(function () {}, 1000);




  
  