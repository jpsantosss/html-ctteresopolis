/*Home*/
function changeBackground() {
    const pageWidth = window.innerWidth;
    const imageHome = document.querySelector('.image-container-home');

    if (pageWidth < 600) {
        imageHome.style.backgroundImage = "none";
        imageHome.style.height = "100%"
        imageHome.innerHTML = '<img src="images/home/comunicado-ctt-s.jpeg" alt="Comunicado">'
    } else if (pageWidth < 1130) {
        imageHome.style.backgroundImage = "url('./images/home/comunicado-ctt-m.jpeg')";
        imageHome.style.height = "600px"
        imageHome.innerHTML = "";
    } else {
        imageHome.style.backgroundImage = "url('./images/home/comunicado-ctt-l.jpeg')";
        imageHome.style.height = "600px"
        imageHome.innerHTML = "";
    }
}
window.addEventListener('resize', changeBackground);

changeBackground();