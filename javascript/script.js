document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".navigation-mobile i");
    const menu = document.querySelector(".header-navigation");
    const logo = document.querySelector(".header-logo");

    // Função para mostrar/esconder o menu mobile
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Redireciona para o index ao clicar no logo
    logo.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});
