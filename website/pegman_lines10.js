var poly;
var map;
var pointA;
var pointB;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
      center: {
       lat: 51.508375,
       lng:  -0.097312
      },
      zoom: 15
    });

    
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {
            lat: 51.508375,
            lng:  -0.097312
        },
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
  }
  // Handles click events on a map, and adds a new point to the Polyline.

function addLatLng(event) {
  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  //point A
  //hard-coded as Shakespeare’s Globe right now
  var image = "https://upload.wikimedia.org/wikipedia/commons/7/73/Farm-Fresh_star.png"; //STAR
  if (!pointA) {
    pointA = new google.maps.Marker({
      position: {
        lat: 51.508375,
        lng:   -0.097312
      },
      map: map,
      title: 'Shakespeare’s Globe',
      label: 'A',
     // animation: google.maps.Animation.DROP
    });
    var contentString_A = '<h5>Shakespeare’s Globe</h5>';
    var infowindow_A = new google.maps.InfoWindow({
      content: contentString_A
    });
    pointA.addListener('click', info_A);

  }

  function info_A() {
    infowindow_A.open(map, pointA);
  }

  //point B
  //hard-coded as ST. PAULS cathedral right now
  if (!pointB) {
    pointB = new google.maps.Marker({
      position: {
        lat: 51.513365,
        lng: -0.098571
      },
      map: map,
      title: 'ST. PAULS cathedral',
      label: 'B',
      //animation: google.maps.Animation.DROP
    });
    var contentString_B = "Success! You finished this level! ";
    var nextLevel = "Next Level";
    var contentstring = contentString_B + nextLevel.link("A2B_game.html");
    var infowindow_B = new google.maps.InfoWindow({
      content: contentstring
    });
    pointB.addListener('click', info_B);
  }
   if (google.maps.geometry.spherical.computeDistanceBetween(pointB.getPosition(), event.latLng) < 35 {
    infowindow_B.open(map, pointB);
  } 
  
  function info_B() {
    infowindow_B.open(map, pointB);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
google.maps.event.addDomListener(window, "load", initMap);