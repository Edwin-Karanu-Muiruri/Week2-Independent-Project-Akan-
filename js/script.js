function getAkanName(){
    let yob = document.getElementById("yob").value
    let mob = document.getElementById("mob").value
    let dob = document.getElementById("dob").value
    if (mob<1 || mob>12 || dob<1 || dob>31){
        alert("The value you have entered is invalid")
    };
    let dayOfTheWeek = [Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday]
    let maleAkanNames = [Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame]
    let femaleAkanNames = [Akosua,Adowa,Abenaa,Akua,Yaa,Afua,Ama]
}