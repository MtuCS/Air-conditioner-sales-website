document.addEventListener('DOMContentLoaded', function() {
    const userData = localStorage.getItem('userData');
    const isLoggedIn = userData !== null && userData !== undefined;

    if (!isLoggedIn) {
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập trước khi sử dụng tính năng này");
        window.location.href = '../html/login.html';
    } else {
        displayCart();
    }
});
function calculateTotalAmount() {
    var totalAmount = 0;
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(function(product) {
        totalAmount += parseFloat(product.total);
    });
    var totalAmountElement = document.getElementById("total-amount-value");
    if (cart.length === 0) {
        totalAmountElement.innerText = "Giỏ hàng trống";
    } else {
        totalAmountElement.innerText = totalAmount.toLocaleString('vi-VN') + "0,000" + " VNĐ";
    }
    document.getElementById("place-order-button").addEventListener("click", function() {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.");
        } else {
            alert("Đặt hàng thành công!");
        }
    });
}
        function displayCart() {
            var cart = JSON.parse(localStorage.getItem("cart")) || [];
            var cartList = document.getElementById("js-cart-list");
            var totalAmount = 0;

            cartList.innerHTML = ""; 

            cart.forEach(function(product) {
            var row = "<tr>";
            row += "<td><img src='" + product.image + "' alt='Product Image' style='max-width: 100px;'> " + product.name + "</td>";
            row += "<td>" + product.price + "</td>";
            row += "<td>" + product.quantity + "</td>";
            row += "<td>" + product.total + "</td>";
            row += "<td><button onclick='removeItemFromCart(\"" + product.name + "\")'>Xóa</button></td>";
            row += "</tr>";
            cartList.innerHTML += row;

            totalAmount += parseFloat(product.total); 
        });

            calculateTotalAmount(); 
        }
        window.onload = function() {
            displayCart();
        };
        function removeItemFromCart(productName) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.name !== productName);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
        alert("Đã xóa sản phẩm khỏi giỏ hàng!");
        }