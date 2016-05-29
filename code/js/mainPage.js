// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationIndex)
{
    // And load the view location page.
    location.href = 'viewlocation.html';
}


window.onload = function getItem(){
    //Get saved datas from local storage
    var saveobject = localStorage.getItem('weatherApp');
    //Parse the data
    saveobject = JSON.parse(saveobject);

    //Make the nickname in the data appear on the lunch page
    document.getElementById("location1").textContent = saveobject[1].nickname.toUpperCase();
    document.getElementById("location2").textContent = saveobject[2].nickname.toUpperCase();
    document.getElementById("location3").textContent = saveobject[3].nickname.toUpperCase();
    document.getElementById("location4").textContent = saveobject[4].nickname.toUpperCase();
    document.getElementById("location5").textContent = saveobject[5].nickname.toUpperCase();
    document.getElementById("location6").textContent = saveobject[6].nickname.toUpperCase();
    
}
