const BASE_URL = "https://66337e28f7d50bbd9b498fc5.mockapi.io/products";

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
  var name = document.getElementById("TenSP").value;
  var price = document.getElementById("GiaSP").value;
  var img = document.getElementById("HinhSP").value;
  var desc = document.getElementById("MoTaSP").value;
  var product = {
    name: name,
    price: price,
    img: img,
    desc: desc,
  };
  // method POST
  axios({
    url: BASE_URL,
    method: "POST",
    data: product,
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

/**
 *
 * GET: lấy tất cả/ lấy chi tiết
 * POST: tạo mới
 * PUT: cập nhật
 * DELETE: xoá
 *
 */

// callback hell

//  promise chaining ~ tuần tự ( trước sau )  : promise A chạy xong rồi mới tới promise B chạy tiếp
//  promise all ( song song) : cả A và B cùng chạy chung 1 thời điểm và đợi response từ cả 2 về đủ mới thực hiện công việc tiếp theo

// api list khu vực  / api lấy nhiệt độ theo khu vực => tuần tự

// api cập nhật thông tin cá nhân / api cập nhật thông tin công việc => chỉ thông báo thành công khi cả 2 api đều trả kết quả thành công

// micro task, macro task ( độ ưu tiên )
