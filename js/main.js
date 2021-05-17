/************************
 * scrollToTopBtn
 *  ********************/
//get button 
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//when user scrolls down 20px from top of doc, show button
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

//scroll event listener
window.addEventListener("scroll", scrollFunc);

// When user clicks button, scroll to top of doc
function topFunction() {
    document.body.scrollTop = 0;    //for Sarfari 
    document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE, Opera
}