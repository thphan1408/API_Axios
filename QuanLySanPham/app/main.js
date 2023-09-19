function layDanhSachSanPham() {
  moLoading();
  getProductList()
    .then(function (res) {
      console.log("RES: ", res);
      inDanhSanPham(res.data);
      tatLoading();
    })
    .catch(function (err) {
      console.log("ERR: ", err);
      tatLoading();
    });
}

layDanhSachSanPham();

// Xóa sản phẩm
function xoaSanPham(id) {
  delProduct(id)
    .then(function (res) {
      console.log("RES: ", res);
      layDanhSachSanPham();
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
}

// Thêm mới sản phẩm
function themSanPham() {
  var sp = layThongTinSanPham();
  console.log(sp);
  addProducts(sp)
    .then(function (res) {
      console.log("RES: ", res);
      // Tắt modal của boostrap sau khi thêm thành công
      $("#myModal").modal("hide");

      // Lấy danh sách sản phẩm mới nhất từ server
      layDanhSachSanPham();
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
}

// Bước 1: lấy thông tin sản phẩm cần sửa show lên form
// Sửa thông tin sản phẩm
function suaSanPham(id) {
  getProductsByID(id)
    .then(function (res) {
      console.log("RES: ", res);
      var sp = res.data;
      console.log("sp khi bấm edit: ", sp);
      // hiện thị thông tin sp cần sửa lên modal
      getElem("#MaSP").value = sp.id;
      getElem("#TenSP").value = sp.tenSanPham;
      getElem("#GiaSP").value = sp.giaSanPham;
      getElem("#HinhSP").value = sp.hinhAnh;
      getElem("#loaiSP").value = sp.moTa;

      // cách 2 để mở modal
      // $("#myModal").modal("show");
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
}

// Bước 2: lấy thông tin từ form sau khi chỉnh sửa để cập nhật
// Cập nhật sản phẩm
function capNhatSanPham() {
  var sp = layThongTinSanPham();
  // console.log('sp khi bấm cập nhật', sp);
  updateProductsByID(sp.id, sp)
    .then(function (res) {
      console.log("RES: ", res);

      // Lấy danh sách sản phẩm mới nhất
      layDanhSachSanPham();

      // Ẩn modal sau khi cập nhật
      $("#myModal").modal("hide");
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
}

// Tìm kiếm sản phẩm
function find() {
  var nameSearch = getElem("#txtSearch").value.trim()?.toLowerCase();

  getProductList()
    .then(function (res) {
      console.log("RES: ", res);

      // Array data
      var danhSachSP = res.data;

      var result = danhSachSP.filter(function (sp) {
        return sp.tenSanPham.toLowerCase().includes(nameSearch);
      });

      inDanhSanPham(result);
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
}

// Cách 2: Tìm kiếm sản phẩm bằng sự kiện click enter
getElem("#txtSearch").addEventListener("keydown", function (event) {
  // event là 1 obj chưa các thông tin về sự kiện
  // console.log("event", event);

  // event.key: trả ra phím vừa mới nhấn
  if (event.key !== "Enter") return;

  // event.target: trả ra cái element phát sinh ra sự kiện
  var name = event.target.value;

  getProductList(name)
    .then(function (res) {
      console.log("RES: ", res.data);
      inDanhSanPham(res.data);
    })
    .catch(function (err) {
      console.log("ERR: ", err);
    });
});
