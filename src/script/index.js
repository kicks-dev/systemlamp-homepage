// AOS初期化
// AOS.init({
//   duration: 1200,
// })

// 地図の初期化
google.maps.event.addDomListener(window, 'load', function() {
     initSystemlampMap();
     initAxislinkMap();
     initKyusyuMap();

});

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
// 小さい画面用のメニュークリック時の動作
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var latlngSystemlamp = new google.maps.LatLng(33.585287, 130.425956);
var latlngAxislink = new google.maps.LatLng(32.836438, 130.778889);

var mapStyle = [
    {"stylers": [
      { "saturation": -100 }]
    }
  ];
var mapType = new google.maps.StyledMapType(mapStyle);

//Add Google Maps
function initSystemlampMap() {
  
  var mapSystemlamp = new google.maps.Map(document.getElementById('map_canvas_systemlamp'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 33.585287, // 緯度
            lng: 130.425956 // 経度
        },
        zoom: 15, // 地図のズームを指定
        scrollwheel: false
    });
  mapSystemlamp.mapTypes.set('GrayScaleMap', mapType);
  mapSystemlamp.setMapTypeId('GrayScaleMap');

  var markerSystemlamp = new google.maps.Marker({
        position : latlngSystemlamp, //緯度・経度
        map : mapSystemlamp          //表示する地図
      });
}


function initAxislinkMap() {
  
  var mapAxislink = new google.maps.Map(document.getElementById('map_canvas_axislink'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 32.836438, // 緯度
            lng: 130.778889 // 経度
        },
        zoom: 15, // 地図のズームを指定
        scrollwheel: false
    });
  mapAxislink.mapTypes.set('GrayScaleMap', mapType);
  mapAxislink.setMapTypeId('GrayScaleMap');

  var markerAxislink = new google.maps.Marker({
        position : latlngAxislink, //緯度・経度
        map : mapAxislink          //表示する地図
      });
}

function initKyusyuMap() {
  
  var mapKyusyu = new google.maps.Map(document.getElementById('map_canvas_kyusyu'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 33.585287, // 緯度
            lng: 130.425956 // 経度
        },
        zoom:6, // 地図のズームを指定
        scrollwheel: false
    });

  mapKyusyu.mapTypes.set('GrayScaleMap', mapType);
  mapKyusyu.setMapTypeId('GrayScaleMap');

  var markerSystemlamp = new google.maps.Marker({
        position : latlngSystemlamp, //緯度・経度
        map : mapKyusyu          //表示する地図
      });
  var markerAxislink = new google.maps.Marker({
        position : latlngAxislink, //緯度・経度
        map : mapKyusyu          //表示する地図
      });
}