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
function checkScroll(e){
    const animationName = "slide-in-bottom"
    const slideInElems = document.querySelectorAll(".animated");
    slideInElems.forEach(slideElem=>{

        const bottomWindow = (window.scrollY + window.innerHeight);
        const imageBottom = slideElem.offsetTop + slideElem.offsetHeight;
        const imageTop = slideElem.offsetTop;

        const isHalfShown = bottomWindow - slideElem.offsetHeight/2 > slideElem.offsetTop;
        const isNotScrolledPastBottom = window.scrollY < imageBottom;
        const isNotScrolledPastTop = bottomWindow > imageTop;
        // If we are halfway trough image
        if ((isHalfShown && isNotScrolledPastBottom)) {
            slideElem.classList.add(animationName)
        }
        // If the top of the image is still shown
        else if(isNotScrolledPastTop){
            slideElem.classList.add(animationName)
        }
        else{
            slideElem.classList.remove(animationName);
        }
      });
}

module.exports = {
    checkScroll: checkScroll,
    debounce: debounce,
}