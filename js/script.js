// Scroll navigation bar
window.addEventListener('scroll',function(){
    const navbar = this.document.querySelector('.navBar').classList;
    navbar.toggle("sticky",window.scrollY > 50);
});


// For toggle bar
 const toggleBar = document.querySelector('.toggle');
 const menu = document.querySelector('ol');
function navigationToggle(){
    toggleBar.classList.toggle("active");
    menu.classList.toggle("active")
}