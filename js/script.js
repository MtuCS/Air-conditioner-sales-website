// tìm kiếm
function searchData() {
    var searchText = document.getElementById("search-text").value;

    window.location.href = "search.php?q=" + searchText; 
}

// lưu local 
var items = [];
document.querySelectorAll(".slider-product-gallery-one-content-item").forEach(function(itemElement) {
    var item = {
        imageSrc: itemElement.querySelector("img").src,
        description: itemElement.querySelector(".slider-product-gallery-one-content-item-text").textContent.trim()
    };
    items.push(item);
});

//
var itemsJSON = JSON.stringify(items);
localStorage.setItem("sliderItems", itemsJSON);
//
document.addEventListener('DOMContentLoaded', function() {
    const usernameSpan = document.querySelector('.username');

    const userData = localStorage.getItem('userData');
    const isLoggedIn = userData !== null && userData !== undefined;

    if (isLoggedIn) {
        const userDataObj = JSON.parse(userData);
        usernameSpan.textContent = userDataObj.name; 
    } else {
        usernameSpan.textContent = 'Tài khoản';
    }
    const userAccount = document.getElementById('userAccount');
    userAccount.addEventListener('click', function() {
        if (isLoggedIn) {
            const confirmed = confirm('Bạn có muốn đăng xuất?');
            if (confirmed) {
                localStorage.removeItem('userData');
                usernameSpan.textContent = 'Tài khoản';
            }
        } else {
            window.location.href = '../html/login.html';
        }
    });

    const cartIcon = document.querySelector('#cartIcon');
    cartIcon.addEventListener('click', function() {
        if (!isLoggedIn) {
            alert('Bạn cần đăng nhập để xem giỏ hàng.');
            window.location.href = '../html/login.html';
        } else {
            window.location.href = '../html/cart.html';
        }
    });
});


//
function redirectToProductPage() {
    const itemElement = event.target.closest('.slider-product-gallery-one-content-item');
    if (itemElement) {
        const imageSrc = itemElement.querySelector('img').src;
        const description = itemElement.querySelector('.slider-product-gallery-one-content-item-text').textContent.trim();
        const url = `product.html?imageSrc=${encodeURIComponent(imageSrc)}&description=${encodeURIComponent(description)}`;
        window.location.href = url;
    }
}

function toggleHidden1() {
    var hiddenItems = document.querySelectorAll(".slider-product-gallery-one-content-items-content > .hidden");
    if (hiddenItems.length > 0) {
        hiddenItems.forEach(function(item) {
            item.classList.remove("hidden");
        });
        var toggleButton = document.querySelector(".toggle");
        toggleButton.classList.add("hidden");

        var hideButton = document.querySelector(".hide");
        hideButton.classList.remove("hidden");
    } else {
        var visibleItems = document.querySelectorAll(".slider-product-gallery-one-content-items-content > .slider-product-gallery-one-content-items > .hidden");
        visibleItems.forEach(function(item) {
            item.classList.add("hidden");
        });
        var toggleButton = document.querySelector(".toggle");
        toggleButton.classList.remove("hidden");

        var hideButton = document.querySelector(".hide");
        hideButton.classList.add("hidden");
    }
}

function toggleHidden2() {
    var x = document.querySelector('.hidden');
    var button = document.querySelector('.toggle h4');
    if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
        button.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

// Footer
function toggleHidden() {
  var hiddenItems = document.getElementById("hiddenItems");
  if (hiddenItems.classList.contains("hidden")) {
      hiddenItems.classList.remove("hidden");
  } else {
      hiddenItems.classList.add("hidden");
  }
}