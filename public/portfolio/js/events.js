function debounce(func, wait = 15, immediate = true) { // Function that ensures that we don't do too many WebAPI calls
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};
const slideInElems = document.querySelectorAll(".slide_in_elem");
function checkScroll(e){
    slideInElems.forEach(slideElem=>{

        const bottomWindow = (window.scrollY + window.innerHeight);
        const imageBottom = slideElem.offsetTop + slideElem.offsetHeight;
        const imageTop = slideElem.offsetTop;

        const isHalfShown = bottomWindow - slideElem.offsetHeight/2 > slideElem.offsetTop;
        const isNotScrolledPastBottom = window.scrollY < imageBottom;
        const isNotScrolledPastTop = bottomWindow > imageTop;
        const isHidden = slideElem.classList.contains("hide")

        // If we are halfway trough image
        if ((isHidden && isHalfShown && isNotScrolledPastBottom)) {
            slideElem.classList.add("slide-in-right")
            slideElem.classList.remove("hide")
        }
        // If the top of the image is still shown
        else if(!isHidden && isNotScrolledPastTop){
            slideElem.classList.add("slide-in-right")
            slideElem.classList.remove("hide")  
        }
        else{
            slideElem.classList.remove("slide-in-right");
            slideElem.classList.add("hide")
        }
      });
}
window.addEventListener('scroll', debounce(checkScroll))