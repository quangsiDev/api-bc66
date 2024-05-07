// render array product từ api
function renderProducts(productArr) {
  var contentHTML = "";
  productArr.forEach(function (item) {
    var trString = ` <tr>
                      <td>${item.id}</td>
                      <td>${item.name}</td>
                      <td>${item.price}</td>
                      <td>${item.img} </td>
                      <td>${item.desc}</td>
                      <td>
                          <button onclick='deleteProduct(${item.id})' class="btn btn-danger">Xoá</button>
                          <button
                          onclick='editFood(${item.id})'
                          class="btn btn-dark">Sửa</button>
                      </td>
                  </tr>`;
    contentHTML += trString;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

// bật tắt tắt
function turnOffLoading() {
  document.getElementById("loading").style.display = "none";
}
function turnOnLoading() {
  document.getElementById("loading").style.display = "block";
}

function getDataForm() {
  var name = document.getElementById("TenSP").value;
  var price = document.getElementById("GiaSP").value;
  var img = document.getElementById("HinhSP").value;
  var desc = document.getElementById("MoTaSP").value;
  return {
    name: name,
    price: price,
    img: img,
    desc: desc,
  };
}
