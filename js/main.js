let elHeader = document.querySelector(".header");
let elHeaderHamburgBtn = document.querySelector(".header-inner__hamburg");

elHeaderHamburgBtn.addEventListener('click', function(){
elHeader.classList.toggle("header--active");
})