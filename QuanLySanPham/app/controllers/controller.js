function getElem(selector){
    return document.querySelector(selector);
}

function inDanhSanPham(danhSachSanPham) {
    var content = "";
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var contentHTML = `
            <tr>
                <td>${sanPham.id}</td>
                <td>${sanPham.tenSanPham}</td>
                <td>${sanPham.giaSanPham}</td>
                <td>
                    <img src="${sanPham.hinhAnh}" class="img-fluid" alt="" />
                </td>
                <td>${sanPham.moTa}</td>
                <td>
                    <div class="d-flex">
                        <button class="btn btn-warning mr-2" onclick="suaSanPham(${sanPham.id})" data-toggle="modal" data-target="#myModal">Edit</button>
                        <button class="btn btn-danger" onclick="xoaSanPham(${sanPham.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `;

        content += contentHTML;
    }

    // In danh sách ra giao diện
    getElem("#tblDanhSachSP").innerHTML = content;
}

// Lấy thông tin từ form
function layThongTinSanPham() {
    var id = getElem('#MaSP').value;
    var tenSP = getElem('#TenSP').value;
    var giaSP = getElem("#GiaSP").value;
    var hinhSP = getElem("#HinhSP").value;
    var moTa = getElem("#loaiSP").value;

    return new SanPham(id, tenSP, giaSP, hinhSP, moTa);
}

// reset thông tin
function resetSanPham() {
    getElem("#TenSP") = "";
    getElem("#GiaSP") = "";
    getElem("#HinhSP") = "";
    getElem("#loaiSP") = "";
}

function moLoading() {
    getElem('#spinner').style.display = "flex"
}

function tatLoading() {
    getElem('#spinner').style.display = "none"
}