/*Home*/
function changeBackground() {
    const pageWidth = window.innerWidth;
    const imageHome = document.querySelector('.image-container-home');

    if (pageWidth < 600) {
        imageHome.style.backgroundImage = "none";
        imageHome.innerHTML = '<img src="images/home/comunicado-ctt-s.jpeg" alt="Comunicado">'
    } else if (pageWidth < 1130) {
        imageHome.style.backgroundImage = "url('../images/home/comunicado-ctt-m.jpeg')";
        imageHome.innerHTML = "";
    } else {
        imageHome.style.backgroundImage = "url('../images/home/comunicado-ctt-l.jpeg')";
        imageHome.innerHTML = "";
    }
}
window.addEventListener('resize', changeBackground);

changeBackground();