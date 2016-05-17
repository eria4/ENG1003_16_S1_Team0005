// Code for the Add Location page.



//link the function to the save button when it is clicked
document.getElementById("SaveButton").onclick = Save();

location = "Melbourne";
location = "s";

function Save(){
    //make variable that connect to the input by user
    var location = document.getElementById("inputLocation").value;
    var Nickname = document.getElementById("inputNickname").value;
    var locationID = 1;
    var nicknameID = 1;
    location = JSON.stringify(location);
    Nickname = JSON.stringify(Nickname);
    
    
    
    //save the input by user the local storage
    localStorage.setItem('location' + locationID,location);
    localStorage.setItem('nickname' + nicknameID,Nickname);
    
    locationID++;
    nicknameID++;
    
   
    
    
}

//Function that initisl
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,

          center: {lat: -34.397, lng: 150.644}
        });
       
    
    var geocoder= new google.maps.Geocoder();
            
        document.getElementById('location').addEventListener("input", function() {
            findit(geocoder,map)
        });
    
      }



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
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
            } 
                    
    });
 }
