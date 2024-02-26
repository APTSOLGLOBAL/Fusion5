/*--banner*/
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel').mount();
  } );
/*--preloader*/
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloaderBg");
  // preloader.classList.add("load_ani_hidden");

  preloader.addEventListener("transitionend", () => {
      // Remove the correct elements using the correct variable names
      document.body.removeChild(preloader);
    });
});