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


window.onload = function getItem(){
    var saveobject = localStorage.getItem('saveobject');
    
    saveobject = JSON.parse(saveobject);
    
    if (saveobject.nickname != ""){
        document.getElementById("location1").textContent = saveobject.nickname.toUpperCase();
    }
    else {
        document.getElementById("location1").textContent = saveobject.location.toUpperCase();
    }
    
}
