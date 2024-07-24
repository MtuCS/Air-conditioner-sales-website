// Header.js
document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class=""> 
        <div class="container">
            <div class="row align-items-center justify-content-between text-center">
                <div class="col-lg-2 col-md-auto col-sm-auto">
                    <ul class="nav">
                        <li>
                            <a class=" fw-bold" href="../html/home.html">
                                <img src="../img/logo.png" alt="" height="90px">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2">
                    <ul class="nav">
                        <li>
                            <form id="search-box" class="d-flex">
                                <input class="form-control me-2" type="text" id="search-text" placeholder="Bạn muốn tìm gì?" size="30px">
                                <button id="search-btn" class="btn" type="button" onclick="searchData()">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2">
                    <ul class="nav">
                        <li>
                            <div id="qc" style="text-align: center;color: #4FC0FF; font-size: larger;">
                                <big><b style="font-size: large;">Bảo hành chính hãng</b></big>
                                <p>tận nơi toàn quốc</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-1 col-md-2 col-sm-2 d-flex justify-content-center align-items-center">
                    <ul class="nav">
                        <li>
                            <div>
                                <a href="../html/cart.html"><img src="../img/giohang.png" alt="Giỏ hàng" width="120px"></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center align-items-center"> <!-- Thay đổi lớp lưới của cột này -->
                    <ul class="nav">
                        <li>
                            <div class="user-account nav" id="userAccount">
                                <div class="row">
                                    <div class="col">
                                        <a style="margin-right: 60px;" href="../html/login.html">
                                            <img src="../img/hoidap_bovoicongdan.png" alt="Tài khoản" width="60px">
                                            <span style="color: #4FC0FF;" class="username"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        <nav class="navbar navbar-expand-lg navbar-light bg-info justify-content-center ">
            <div class="container-fluid container ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav">
                        <ul class="navbar-nav nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a href="../html/home.html">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a href="../html/allProduct.html">Máy lạnh</a>
                            </li>
                            <li class="nav-item">
                                <a href="../html/allProduct.html">Bảng giá</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dịch vụ
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item-nav" href="#">Sửa chữa máy lạnh</a></li>
                                    <li><a class="dropdown-item-nav" href="#">Bảo trì máy lạnh</a></li>
                                    <li><a class="dropdown-item-nav" href="#">Bảo hành máy lạnh</a></li>
                                    <li><a class="dropdown-item-nav" href="#">CSKH</a></li>
                                </ul>
                            </li>
                            <li class="nav-item ">
                                <a href="../html/aboutus.html">Về chúng tôi</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="htline nav ml-auto">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <i style="color: white;" class="fa-solid fa-phone"></i>
                        </div>
                        <div class="col-auto">
                            <a href="tel:0999 333 666">0999 333 666</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    </header>`;
  
    const headerContainer = document.querySelector(".header-container");
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
