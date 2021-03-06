// Code for the Add Location page.
    

//Function that initialise map
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: -34.397, lng: 150.644}
        });
       
    
    var geocoder= new google.maps.Geocoder();
        
    //Code that connect the input in location text box with the function findit
        document.getElementById('location').addEventListener("input", function() {
            findit(geocoder,map)
        });
    
      }


//Function that change the location that appears on the map 
//when text is being typed in the location text box
function findit(geocoder, resultsMap) {
                var address = document.getElementById("location").value;
                geocoder.geocode({'address':address}, function(results, status) {
                    if (status===google.maps.GeocoderStatus.OK){
                        
                resultsMap.setCenter(results[0].geometry.location);
                resultsMap.panTo(results[0].geometry.location);      
               var marker = new google.maps.Marker({
               map: resultsMap,
               position: results[0].geometry.location
             });
                //Global variable that contain the latitude and longitude of the location
                this.lat = results[0].geometry.location.lat();
                this.lng = results[0].geometry.location.lng();
            } 
                    
    });
 }
