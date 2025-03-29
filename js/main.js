document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Thêm lớp khi cuộn
        } else {
            navbar.classList.remove("scrolled"); // Gỡ lớp khi quay lại đầu trang
        }
    });
});
