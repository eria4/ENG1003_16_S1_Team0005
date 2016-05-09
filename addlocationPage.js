// Code for the Add Location page.

document.getElementById('SaveButton').onclick = Save();

function Save(){
    var location = document.getElementById("txtLocation").innerHTML;
    var Nickname = document.getElementById("txtNickname").innerHTML;
    localStorage.setItem('location',location);
    localStorage.setItem('nickname',Nickname);
}
    