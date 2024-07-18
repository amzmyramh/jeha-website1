conts header = document.querySelector("header");

window.addEventListener("scroll",fungction(){
    header.classlist.toggle("sticky",window.scrollY > 200)
});