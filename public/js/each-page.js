function navbarChangeToWhite(){var a=document.getElementById("myNavbar");document.body.scrollTop>100||document.documentElement.scrollTop>100?a.className="w3-bar w3-card w3-animate-top w3-white":a.className=a.className.replace(" w3-card w3-animate-top w3-white","")}window.onload=function(){$("html,body").animate({scrollTop:0},500,"swing")},window.onscroll=function(){navbarChangeToWhite()};