function gopy() {
    var hoten = document.getElementById('hoten').value;
    var sdt = document.getElementById('sdt').value;
    var mathe = document.getElementById('mathe').value;
    var email = document.getElementById('email').value;
    var loaikh = document.getElementById('loaikh').value;
    var mahd = document.getElementById('mahd').value;
    var mota = document.getElementById('mota').value;
    // hiển thị cửa sổ confirm
    var ketqua=confirm('Họ và tên: ' + hoten + '\nSố điện thoại: ' + sdt + '\nMã thẻ: ' + mathe + '\nEmail: ' + email + '\nLoại khách hàng: ' + loaikh + '\nMã hóa đơn: ' + mahd + '\nNội dung góp ý: ' + mota);
    if (ketqua) {
        // Nếu chọn OK, reset lại ô input
        document.getElementById('hoten').value="";
        document.getElementById('sdt').value="";
        document.getElementById('mathe').value="";
        document.getElementById('email').value="";
        document.getElementById('loaikh').value="";
        document.getElementById('mahd').value="";
        document.getElementById('mota').value="";
    }
}