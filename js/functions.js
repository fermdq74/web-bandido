// Global functions
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateLeft(obj, from, to){

        var box = obj;
        //box.style.marginLeft = from + "px";
        box.style.transform = "translate(" + from + ",-50%)";
        setTimeout(function(){
            animateLeft(obj, from - 1, to);
        }, 25)

 }
