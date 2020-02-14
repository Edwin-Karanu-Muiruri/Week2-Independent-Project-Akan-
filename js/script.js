function getAkanName(){
    var yob = document.getElementById("yob").value
    var mob = document.getElementById("mob").value
    var dob = document.getElementById("dob").value
    if (mob<1 || mob>12 || dob<1 || dob>31){
        alert("The value you have entered is invalid")
    }
}