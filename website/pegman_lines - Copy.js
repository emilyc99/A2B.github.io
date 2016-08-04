var poly;
var map;
var pointA;
var pointB;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
      center: {
        lat: 30.565244,
        lng: -97.671010
      },
      zoom: 14
    });

    var txstate = {
      lat: 30.569858,
      lng: -97.655918
    };
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: txstate,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    google.maps.event.addListener(panorama, 'pano_changed', function() {
      addLatLng({
        latLng: panorama.getPosition()
      });
      if (!map.getBounds().contains(panorama.getPosition())) {
        map.setCenter(panorama.getPosition());
      }
    })
    map.setStreetView(panorama);
    
   

    poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    poly.setMap(map);

    // Add a listener for the click event
    map.addListener('position_change', addLatLng);
    
    map.addListener('position_change', endGame);
  }
  // Handles click events on a map, and adds a new point to the Polyline.
  
function endGame(event){
    var end = {lat: 30.560619,
        lng: -97.688338};
        
    /*var lat = panorama.getPosition().lat();
    var lng = panorama.getPosition().lng();
    var lat2 = end.lat;
    var lng2 = end.lng;
    
    function approximatelyEqual(a, b, epsilon){
        return Math.abs(A-B) <= A < B ? B = A * epsilon;
        var A = Math.abs(a), B = Math.abs(B);
    }*/
    
    if(approximatelyEqual(lat, lat2, 0.0005) && approximatelyEqual(lng, ln2, 0.0005))
        window.alert("end game!");
}

function addLatLng(event) {
  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  //point A
  //hard-coded as Texas State University right now
  var image = "https://upload.wikimedia.org/wikipedia/commons/7/73/Farm-Fresh_star.png"; //STAR
  if (!pointA) {
    pointA = new google.maps.Marker({
      position: {
        lat: 30.567989,
        lng: -97.655153
      },
      map: map,
      title: 'tx state',
      label: 'A',
     // animation: google.maps.Animation.DROP
    });
    var contentString_A = '<h5>texas state university at round rock</h5>';
    var infowindow_A = new google.maps.InfoWindow({
      content: contentString_A
    });
    pointA.addListener('click', info_A);

  }

  function info_A() {
    infowindow_A.open(map, pointA);
  }

  //point B
  //hard-coded as H-E-B right now
  if (!pointB) {
    pointB = new google.maps.Marker({
      position: {
        lat: 30.560619,
        lng: -97.688338
      },
      map: map,
      title: 'heb',
      label: 'B',
      //animation: google.maps.Animation.DROP
    });
    var contentString_B = '<h5>h-e-b</h5>';
    var infowindow_B = new google.maps.InfoWindow({
      content: contentString_B
    });
    pointB.addListener('click', info_B);
  }

  function info_B() {
    infowindow_B.open(map, pointB);
  }
 




}
google.maps.event.addDomListener(window, "load", initMap);

