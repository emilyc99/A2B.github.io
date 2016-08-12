<!DOCTYPE html>
 <html lang="en">
 <head>
   <title>A2B</title>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
         <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
         <link rel="stylesheet" href="A2B.css"></link>
         <script type="text/javascript" src="pegman_lines3.js"></script>
        <link rel="icon" href="icon.png">
</head>
 <body>
 
 <nav class="navbar navbar-default">
   <div class="container">
     <div class="navbar-header">
       <button type="button" class="navbar-toggle" align="middle"data-toggle="collapse" data-target="#myNavbar">
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span> 
       </button>
       <a class="navbar-brand" href="A2B.html">Home</a>
     </div>
     <div class="collapse navbar-collapse" id="myNavbar">
       <ul class="nav navbar-nav navbar-right">
             <li class="dropdown">
                 <a class="dropdown-toggle" data-toggle="dropdown" href="#">Levels
                 <span class="caret"></span></a>
                 <ul class="dropdown-menu">
                     <li><a href="A2B_game.html">TX State to H-E-B</a></li>
                     <li><a href="A2B_game2.html">IKEA to Outlet</a></li>
                     <li><a href="A2B_game3.html">Torchy's to Dell Diamond</a></li>
                     <li><a href="A2B_game4.html">Austin State Capitol to UT Tower</a></li>
                     <li><a href="A2B_game5.html">White House to Smithsonian</a></li>
           </ul>
         </li>
         <li><a href="about_game.html">About the game</a></li>
         <li><a href="about_us.html">Developers</a></li>
       </ul>
     </div>
   </div>
   
   
 </nav>
 
 <div id="map"></div>
 <div id="pano"></div>
     <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhOqIGkGPLTFfBdOJnb2YsY04_JnPXy4c&callback=initMap"> 
     </script>
     <script>
     $(document).ready(function () {
             $('#myModal').modal('show');
         });
     </script>
     <div class="container">
 
   <!-- Modal -->
   <div class="modal fade" id="myModal" role="dialog">
     <div class="modal-dialog">
    
       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title">A to B</h4>
         </div>
         <div class="modal-body">
           <p>
           <b>How to Play:</b><br>
           1. Click on the panorama view <br>
           2. Navigate with arrow keys <br>
           3. Find the fastest way from Point A to Point B!
           </p>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-default" data-dismiss="modal">Ready!</button>
         </div>
       </div>
       
     </div>
   </div>
   
 </div>
     
     
   
 </div>
 
 
 
 <!--<footer class="container-fluid bg-4 text-center">
   <p>Bootstrap Theme Made By <a href="http://www.w3schools.com">www.w3schools.com</a></p> 
 </footer>-->
 
 </body>
 </html> 