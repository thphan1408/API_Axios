const BASE_URL = "https://6500588d18c34dee0cd4bfa3.mockapi.io/products";

/**
 * Lấy danh sách sản phẩm
 * @returns axios với phương thức get
 */
function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",

    // Những cái cặp key value khai báo bên trong obj params sẽ được gửi lên url theo định dạng example.com/products?key=value&key2=value2
    params: {
      tenSanPham: name || undefined,
    },
  });
}

/**
 * Xóa sản phẩm theo id
 * @returns axios với phương thức delete
 */
function delProduct(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}

/**
 * Thêm sản phẩm mới, với params truyền vào là sp
 * @returns axios với phương thức POST
 */
function addProducts(sp) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: sp,
  });
}

/**
 * Lấy sản phẩm theo id
 * @returns axios với phương thức GET
 */
function getProductsByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}

/**
 * Cập nhật sản phẩm theo id và params sp truyền vào để cập nhật sau khi chỉnh sửa
 * @returns axios với phương thức PUT, data: sp
 */
function updateProductsByID(id, sp) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: sp,
  });
}
