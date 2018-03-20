window.onload = function(){

  $('html,body').animate({scrollTop: 0}, 500, 'swing');
}

// スクロール時
window.onscroll = function() {navbarChangeToWhite()};

// ナビの色を白に変える。
function navbarChangeToWhite() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}