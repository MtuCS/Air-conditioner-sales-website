document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtns = document.querySelectorAll(".dropbtn");
    var dropdownContents = document.querySelectorAll(".dropdown-content");

    dropdownBtns.forEach(function(btn, index) {
        btn.addEventListener("click", function() {
            // Ẩn tất cả các dropdown content trước khi hiển thị dropdown content mới
            dropdownContents.forEach(function(content) {
                content.classList.remove("show");
            });
            // Hiển thị dropdown content tương ứng với dropdown button được click
            dropdownContents[index].classList.toggle("show");
        });
    });

    // Đóng dropdown nếu click bên ngoài dropdown
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContents.forEach(function(content) {
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                }
            });
        }
    }
});
