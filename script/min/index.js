function myFunction(){var e=document.getElementById("navDemo");-1==e.className.indexOf("w3-show")?e.className+=" w3-show":e.className=e.className.replace(" w3-show","")}function myMap(){myCenter=new google.maps.LatLng(41.878114,-87.629798);var e={center:myCenter,zoom:12,scrollwheel:!1,draggable:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},a=new google.maps.Map(document.getElementById("googleMap"),e);new google.maps.Marker({position:myCenter}).setMap(a)}var modal=document.getElementById("ticketModal");window.onclick=function(e){e.target==modal&&(modal.style.display="none")};