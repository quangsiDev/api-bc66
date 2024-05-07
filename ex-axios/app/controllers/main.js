const BASE_URL = "https://66337e28f7d50bbd9b498fc5.mockapi.io/products";
var foodEditId = null;
// gọi api lấy danh sách sản phẩm
function fetchProducts() {
  turnOnLoading();
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (res) {
      turnOffLoading();
      // gọi hàm render SAU KHI CÓ DATA TỪ SERVER
      console.log("😀 - res", res);
      renderProducts(res.data);
    })
    .catch(function (err) {
      turnOffLoading();
      console.log("😀 - err", err);
    });
}
fetchProducts();

//   xoá sp
function deleteProduct(id) {
  turnOnLoading();
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      // xoá thành công từ server sẽ nhảy vào then chạy tiếp
      // window.location.reload();
      // gọi lại api lấy ds sản phẩm mới nhất từ server
      fetchProducts();
    })
    .catch(function (err) {
      turnOffLoading();
      console.log(err);
    });
}

// thêm  sp
function createFood() {
  // lấy thông tin từ form

  // method POST
  axios({
    url: BASE_URL,
    method: "POST",
    data: getDataForm(),
  })
    .then(function (res) {
      // tắt modal sau khi thêm thành công
      $("#myModal").modal("hide");
      console.log(res);
      //   lấy data mới nhất từ server sau khi thêm
      fetchProducts();
    })
    .catch(function (err) {
      console.log(err);
    });
}
// sửa sp ( lấy chi tiết theo id )
function editFood(id) {
  foodEditId = id;
  document.querySelector(".modal-title").innerText = `ID : ${foodEditId}`;
  // gọi api lấy chi tiết theo id

  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then(function (res) {
      // show data lên form
      $("#myModal").modal("show");
      var food = res.data;
      document.getElementById("TenSP").value = food.name;
      document.getElementById("GiaSP").value = food.price;
      document.getElementById("HinhSP").value = food.img;
      document.getElementById("MoTaSP").value = food.desc;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// cập nhật sản phẩm
function updateFood() {
  // method PUT
  // lấy thông tin từ form
  axios({
    url: `${BASE_URL}/${foodEditId}`,
    method: "PUT",
    data: getDataForm(),
  })
    .then(function (res) {
      console.log("😀 - res", res);
      // fetch data mới nhất từ server
      fetchProducts();
      // ẩn modal
      $("#myModal").modal("hide");
    })
    .catch(function (err) {});
}

/**
 *
 * GET: lấy tất cả/ lấy chi tiết
 * POST: tạo mới
 * PUT: cập nhật
 * DELETE: xoá
 */

// callback hell

//  promise chaining ~ tuần tự ( trước sau )  : promise A chạy xong rồi mới tới promise B chạy tiếp
//  promise all ( song song) : cả A và B cùng chạy chung 1 thời điểm và đợi response từ cả 2 về đủ mới thực hiện công việc tiếp theo

// api list khu vực  / api lấy nhiệt độ theo khu vực => tuần tự

// api cập nhật thông tin cá nhân / api cập nhật thông tin công việc => chỉ thông báo thành công khi cả 2 api đều trả kết quả thành công

// micro task, macro task ( độ ưu tiên )
