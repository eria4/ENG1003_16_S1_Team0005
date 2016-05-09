// Code for the Add Location page.

//link the function to the save button when it is clicked
document.getElementById('SaveButton').onclick = Save();

function Save(){
    //make variable that connect to the input by user
    var location = document.getElementById("txtLocation").innerHTML;
    var Nickname = document.getElementById("txtNickname").innerHTML;
    
    //save the input by user the local storage
    localStorage.setItem('location',location);
    localStorage.setItem('nickname',Nickname);
}
    
