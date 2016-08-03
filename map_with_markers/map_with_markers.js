 
  function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 30.565244, lng: -97.671010},
            zoom: 14
        });

        var txstate = {lat: 30.569858, lng: -97.655918};
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: txstate,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
        map.setStreetView(panorama);
       
        
        //point A
        //hard-coded as Texas State University right now
        var image = "https://upload.wikimedia.org/wikipedia/commons/7/73/Farm-Fresh_star.png"; //STAR

        var pointA = new google.maps.Marker({
            position: {lat: 30.567989, lng: -97.655153}, 
            map: map,
            title: 'tx state',
            icon: image,
            animation: google.maps.Animation.DROP
        });
        var contentString_A = '<h5>texas state university at round rock</h5>';
        var infowindow_A = new google.maps.InfoWindow({
            content: contentString_A
        });
        function info_A(){
            infowindow_A.open(map, pointA);
        }
        
        
        //point B
        //hard-coded as H-E-B right now
        var pointB = new google.maps.Marker({
            position: {lat: 30.560619, lng: -97.688338}, 
            map: map,
            title: 'heb',
            icon: image,
            animation: google.maps.Animation.DROP
        });
        var contentString_B = '<h5>h-e-b</h5>';
        var infowindow_B = new google.maps.InfoWindow({
            content: contentString_B
        });
        function info_B(){
            infowindow_B.open(map, pointB);
        }
        
        
        
        pointA.addListener('click', info_A);
        pointB.addListener('click', info_B);
        
        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
        
      }

      
      
      
      

        
        

