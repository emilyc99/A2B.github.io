var poly;
var map;
var pointA;
var pointB;
var outlet = {lat: 30.56621, lng: -97.68937};
var ikea = {lat:30.55670, lng: -97.69154};

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
      center: outlet,
      zoom: 14
    });

    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: 30.56621, lng: -97.68937},
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
  


function addLatLng(event) {
  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  //point A
  //hard-coded as Texas State University right now
  //var image = "https://upload.wikimedia.org/wikipedia/commons/7/73/Farm-Fresh_star.png"; //STAR
  if (!pointA) {
    pointA = new google.maps.Marker({
      position:  {lat:30.55670, lng: -97.69154},
      map: map,
      title: 'outlet',
      label: 'A',
     // animation: google.maps.Animation.DROP
    });
    var contentString_A = '<h5>round rock premium outlets</h5>';
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
      position: {lat: 30.56621, lng: -97.68937},
      map: map,
      title: 'ikea',
      label: 'B',
      //animation: google.maps.Animation.DROP
    });
    var contentString_B = "Success! You finished this level! ";
    var nextLevel = "Next Level";
    var contentstring = contentString_B + nextLevel.link("A2B_game3.html");
    var infowindow_B = new google.maps.InfoWindow({
      content: contentstring
    });
    pointB.addListener('click', info_B);
  }
  
  if (google.maps.geometry.spherical.computeDistanceBetween(pointB.getPosition(), event.latLng) < 130) {
    infowindow_B.open(map, pointB);
  }
    
  function info_B() {
    infowindow_B.open(map, pointB);
  }
 




}
google.maps.event.addDomListener(window, "load", initMap);

