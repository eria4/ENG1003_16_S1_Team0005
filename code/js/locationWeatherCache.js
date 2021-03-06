

// Returns a date in the format "YYYY-MM-DD".
Date.prototype.simpleDateString = function() {
    function pad(value)
    {
        return ("0" + value).slice(-2);
    }

    var dateString = this.getFullYear() + "-" + 
            pad(this.getMonth() + 1, 2) + '-' + 
            pad(this.getDate(), 2);
    
    return dateString;
}

// Date format required by forecast.io API.
// We always represent a date with a time of midday,
// so our choice of day isn't susceptible to time zone errors.
Date.prototype.forecastDateString = function() {
    return this.simpleDateString() + "T12:00:00";
}


// Code for LocationWeatherCache class and other shared code.

// Prefix to use for Local Storage.  You may change this.
var APP_PREFIX = "weatherApp";



function LocationWeatherCache()
{
    // Private attributes:

    var locations = [];
    var callbacks = {};
	var apikey =  "017082e004aefa0237e14c95bdf64850";
    // Public methods:
    
    // Returns the number of locations stored in the cache.
    //
    this.length = function() 
    {
    	return locations.length;
    };
    
    // Returns the location object for a given index.
    // Indexes begin at zero.
    //
    this.locationAtIndex = function(index) {
    	
    	return locations[index];
    };

    // Given a latitude, longitude and nickname, this method saves a 
    // new location into the cache.  It will have an empty 'forecasts'
    // property.  Returns the index of the added location.
    //
    this.addLocation = function(latitude, longitude, nickname)
    {
    	locations.push({
    		"nickname" : nickname,
    		"latitude" : latitude,
    		"longitude" : longitude,
    		"forecasts" : ""
    	});
        saveLocations();
        return locations.length - 1;
    }

    // Removes the saved location at the given index.
    // 
    this.removeLocationAtIndex = function(index)
    {
      var locations.length = locationsLength;
      if ( locationsLength > index)
      {
      	locations.splice( index , 1);
      }
      else
      {
      	console.log( "No location at index");
      }
    }

    // This method is used by JSON.stringify() to serialise this class.
    // Note that the callbacks attribute is only meaningful while there 
    // are active web service requests and so doesn't need to be saved.
    //
    this.toJSON = function() {
    	var locationWeatherCachePDO= {
    		locations: locations
    	}
    	return locationWeatherCachePDO
    	}
    };

    // Given a public-data-only version of the class (such as from
    // local storage), this method will initialise the current
    // instance to match that version.
    //
    this.initialiseFromPDO = function(locationWeatherCachePDO) {
    	var locationsObject= {};
    	locationsObject.locations= locations;
    	
    	return locationsObject;
    };

    // Request weather for the location at the given index for the
    // specified date.  'date' should be JavaScript Date instance.
    //
    // This method doesn't return anything, but rather calls the 
    // callback function when the weather object is available. This
    // might be immediately or after some indeterminate amount of time.
    // The callback function should have two parameters.  The first
    // will be the index of the location and the second will be the 
    // weather object for that location.
    // 
    this.getWeatherAtIndexForDate = function(index, date, callback) {
    	
    	var latitude = locations[index].lat;
    	var longitude = locations[index].lat;
    	
    	if ( date == "today")
    	{
    		var currentDate = new Date().forecastDateString();
    	}
    	else
    	{
    		var currentDate = date + "T12:00:00";
    	}
    	
    	var conditions = "?units=si";
    	conditions = conditions + "&[currently,hourly,minutely]";
    	
	var callback = "&callback=c.weatherResponse";
	var url = "https://api.forecast.io/forecast/" + apikey ;
	
	var parameters;
    	parameters = latitude + ","  + longitude + "," + currentDate + conditions + callback;
    	
	var script = document.createElement('script');
	script.src = url + parameters;
	document.body.appendChild(script);
	 // Build URL parameters from data object.
    var params = "";
    // For each key in data object...
    }
    
	
    };
    
    // This is a callback function passed to forecast.io API calls.
    // This will be called via JSONP when the API call is loaded.
    //
    // This should invoke the recorded callback function for that
    // weather request.
    //
    this.weatherResponse = function(response) {
    	
    	var weatherSummary = response.daily.data[0].summary;
	var weatherIcon = response.daily.data[0].icon;
	var minTemp = response.daily.data[0].temperatureMin;
	var maxTemp = response.daily.data[0].temperatureMax;
	var humidity = response.daily.data[0].humidity;
	var windSpeed = response.daily.data[0].windSpeed;
	
	var locationWeather = 
		{
			summary: weatherSummary,
			icon : weatherIcon + ".png",
			min : minTemp,
			max : maxTemp,
			humidity: humidity,
			windSpeed: windSpeed,
		};
    };

    // Private methods:
    
    // Given a latitude and longitude, this method looks through all
    // the stored locations and returns the index of the location with
    // matching latitude and longitude if one exists, otherwise it
    // returns -1.
    //
    
    function indexForLocation(latitude, longitude)
    {
       for ( index = 0 ; index < locations.length ; index++)
       {
       	if( locations[ index ].latitude == latitude && locations[ index ].longitude == longitude )
       		{
       
       				return index;
       			}
       			else {return -1;}
       		}
       }
       
            
    


// Restore the singleton locationWeatherCache from Local Storage.
//
function loadLocations()
{
    var storedLocations = localStorage.getItem( 'locations');
    locations = JSON.parse( storedLocations );
    
}

// Save the singleton locationWeatherCache to Local Storage.
//
function saveLocations()
{
   var storedLocations= JSON.stringify(locationWeatherCache);
   localStorage.setItem( 'APP_PREFIX', storedLocations);
}

var cache =  new LocationWeatherCache();

function clickSaveButton()
{
    //make variable that connect to the input by user
    var location = document.getElementById("location").value;
    var nickname = document.getElementById("nickname").value;
    
    //Adds a permanent record of location
    cache.addLocation( lat, lng, nickname);
    
    
    //The main page will appear when add location is clicked
    history.back();
    
}

