const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');

      burger.addEventListener('click',()=>{
          //Toggle Nav
        nav.classList.toggle('nav-active');

         //Animate Links
        navLinks.forEach((link,index) => {

          if(link.style.animation){
            link.style.animation ='';
            }
          else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7}s`;
            }
      });
        //Burger Animation
        burger.classList.toggle('toggle');
      
    });
     
}
navSlide();

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});