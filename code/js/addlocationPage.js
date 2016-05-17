// Code for the Add Location page.

//Link the function to the add location button when it is clicked
document.getElementById("saveButton").onclick = function (){Save()};


//Function to save location, nickname, latitude and longitude of location to local storage
function Save(){
    //make variable that connect to the input by user
    var location = document.getElementById("location").value;
    var nickname = document.getElementById("nickname").value;
    
    //Object that contain the location, nickname, latitude and longitude of location
    var saveobject = {
        'location': location,
        'nickname': nickname,
        'lat': lat,
        'lng': lng     
    };
    
    
    //Save the input by user the local storage
    localStorage.setItem('saveobject',JSON.stringify(saveobject));
    
    //The main page will appear when add location is clcked
    history.back();
    
}

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
