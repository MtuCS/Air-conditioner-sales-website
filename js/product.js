const queryStringParams = new URLSearchParams(window.location.search);
const productImageSrc = queryStringParams.get('imageSrc');
const productDescription = queryStringParams.get('description');
const productDescriptionParts = productDescription.split('\n').filter(part => part.trim() !== ''); 
const productName = productDescriptionParts[1].trim();
let productPrice = ''; 

for (let i = 0; i < productDescriptionParts.length; i++) {
    const part = productDescriptionParts[i].trim();
    if (part.includes('₫') && !isNaN(part.replace('₫', '').trim().replace('.', ''))) {
        productPrice = part;
        break; 
    }
}

// Thay đổi nội dung của thẻ <a> trong breadcrumb thành tên sản phẩm
const breadcrumbLink = document.querySelector('.breadcrumb li:nth-child(3) a'); // Lựa chọn thẻ <a> trong thẻ <li> thứ 3
if (breadcrumbLink) {
    breadcrumbLink.textContent = productName;
}

document.querySelector('.col h3').textContent = productName; 
document.querySelector('.col-6 img').src = productImageSrc; 
document.querySelector('.box-price-present').textContent = productPrice;

function addToCart() {
    console.log("Đã nhấn vào nút THÊM VÀO GIỎ");
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({
        "name": productName,
        "image": productImageSrc, 
        "price": productPrice, 
        "quantity": 1,
        "total": productPrice 
    });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    window.location.href = "cart.html";
}
