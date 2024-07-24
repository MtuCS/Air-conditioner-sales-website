document.addEventListener("DOMContentLoaded", function() {
    var explainFilter = document.querySelector('.explain-filter');
    var explainFilterDetail = document.querySelector('.explain-filter-detail');

    explainFilter.addEventListener('click', function() {
        // Toggle class 'active' cho phần chi tiết
        explainFilterDetail.classList.toggle('active');
    });
});
