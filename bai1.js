function Giaiptbacnhat(){
    var a = parseFloat(document.getElementById('hesoa').value);
    var b = parseFloat(document.getElementById('hesob').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("ketqua").innerText='Vui lòng nhập số hợp lệ.';
    } else {
        if (a==0) {
            if (b==0) {
                document.getElementById("ketqua").innerText='Phương trình vô số nghiệm';
            } else {
                document.getElementById("ketqua").innerText='Phương trình vô nghiệm';
            }
        } else {
            var x=-b/a;
            document.getElementById('ketqua').innerText='Nghiệm x=' + x;
        } 
    }
}