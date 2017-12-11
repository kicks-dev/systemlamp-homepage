// JScript source code

//index.js

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Add Google Maps
function initMap() {
  var latlng = new google.maps.LatLng(33.585287, 130.425956);
  var map = new google.maps.Map(document.getElementById('map_canvas'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 33.585287, // 緯度
            lng: 130.425956 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
  var marker = new google.maps.Marker({
        position : latlng, //緯度・経度
        map : map          //表示する地図
      });
}
