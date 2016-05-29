// Code for the View Location page.



var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [ "Location A", "Location B" ];
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = locationNames[locationIndex];
}

loadLocations();
var lat = locations[index].latitude;
var lng = locations[index].longitude;

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: -34.397, lng: 150.644}
        });
       
cache.weatherResponse();

