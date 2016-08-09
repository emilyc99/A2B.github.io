  //point B
  //hard-coded as UT Tower
  if (!pointB) {
    pointB = new google.maps.Marker({
      position: {
        lat: 38.88878,
        lng: -77.02596
      },
      map: map,
      title: 'University of Texas Tower',
      label: 'B',
      //animation: google.maps.Animation.DROP
  });}
        var contentString_B = "Success! You finished this level! ";
        var nextLevel = "Next Level";
        var contentstring = contentString_B + nextLevel.link("A2B_game5.html");
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