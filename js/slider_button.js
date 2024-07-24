// Khai báo biến index và các element DOM liên quan
let index = 0;
const leftBtn = document.getElementById('chevronL');
const rightBtn = document.getElementById('chevronR');
const slideContent = document.querySelector('.slider-product-one-content-items');

// Xử lý sự kiện khi nhấn nút phải (next)
rightBtn.addEventListener('click', function() {
    index = (index + 1) % slideContent.children.length;
    updateSlider();
});

// Xử lý sự kiện khi nhấn nút trái (prev)
leftBtn.addEventListener('click', function() {
    index = (index - 1 + slideContent.children.length) % slideContent.children.length;
    updateSlider();
});

// Hàm cập nhật slider
function updateSlider() {
    const itemWidth = slideContent.children[0].clientWidth; // Lấy chiều rộng của mỗi slide item
    const newPosition = -index * itemWidth; // Tính vị trí mới dựa trên index

    slideContent.style.transform = `translateX(${newPosition}px)`; // Di chuyển slider đến vị trí mới
}
