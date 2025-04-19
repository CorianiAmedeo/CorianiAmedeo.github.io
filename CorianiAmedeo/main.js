var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var delta = 10;
    if(Math.abs(prevScrollpos-currentScrollPos)>delta) {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("resume-cta").style.top = "48px";
        } else {
            document.getElementById("resume-cta").style.top = "1px";
        }
    }
  prevScrollpos = currentScrollPos;
} 