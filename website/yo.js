  //point B
  //hard-coded as St. Paul's Cathedral
  if (!pointB) {
    pointB = new google.maps.Marker({
      position: {
        lat: 51.513365,
        lng: -0.098571
      },
      map: map,
      title: 'St. Paul's Cathedral,
      label: 'B',
      //animation: google.maps.Animation.DROP
  });}
        var contentString_B = "Success! You finished this level! ";
        var nextLevel = "Next Level";
        var contentstring = contentString_B + nextLevel.link("A2B_game8.html");
        var infowindow_B = new google.maps.InfoWindow({
            content: contentstring
        });
    pointB.addListener('click', info_B);
  
   console.log (pointB.getPosition().toString());
   console.log (event.latLng.toString());
   console.log((google.maps.geometry.spherical.computeDistanceBetween(pointB.getPosition(), event.latLng).toString()));
   if (google.maps.geometry.spherical.computeDistanceBetween(pointB.getPosition(), event.latLng) < 145.0) {
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