function getAkanName(){
    let yob = document.getElementById("yob").value
    let mob = document.getElementById("mob").value
    let dob = document.getElementById("dob").value
    if (mob<1 || mob>12 || dob<1 || dob>31){
        alert("The value you have entered is invalid")
    };
    let CC = parseInt(document.getElementById("yob").value.slice(0,1));
    let YY = parseInt(document.getElementById("yob").value.slice(2,3));
    let MM = parseInt(document.getElementById("mob").value);
    let DD = parseInt(document.getElementById("dob").value);
    let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleAkanNames = ["Akosua","Adowa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    let dayOfTheWeek = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    if (gender==="male"){
        alert(maleAkanNames[dayOfTheWeek]);
    }else if(gender==="female"){
        alert(femaleAkanNames[dayOfTheWeek]);
    };
    };