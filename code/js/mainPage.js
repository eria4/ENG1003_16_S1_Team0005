// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationName)
{
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // And load the view location page.
    location.href = 'viewlocation.html';
}

function getItem(){
    var location = localStorage.getItem('location' + locationID);
    var nickname = localStorage.getItem('nickname'' + nicknameID);
    location = JSON.parse(location);
    nickname = JSON.parse(nickname);
    document.getElementById("icon0").value = location;
}
