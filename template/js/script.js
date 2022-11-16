//recherche
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
        loginForm.classList.remove('active');
        navBar.classList.remove('active');
}

//login
let loginForm =document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
        navBar.classList.remove('active');
}
//nav bar
let navBar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
        loginForm.classList.remove('active');
}
    window.onscroll = () =>{
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navBar.classList.remove('active');}

//slider bannier
        let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 9000); // Change image every 2 seconds
    }

