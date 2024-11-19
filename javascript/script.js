function showMenu(){
    var menuHamburguer = document.getElementById("header-navigation");
    if (menuHamburguer.style.display === "block"){
        menuHamburguer.style.display = "none";
    } else {
        menuHamburguer.style.display = "block";
    }
}