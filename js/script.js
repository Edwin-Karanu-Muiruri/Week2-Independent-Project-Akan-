function getAkanName(){
    let YOB = document.getElementById("yob").value;
    let CC = parseInt(YOB.slice(0,2));
    let YY = parseInt(YOB.slice(2,4));
    let MM = parseInt(document.getElementById("mob").value);
    let DD = parseInt(document.getElementById("dob").value);
    let gender = document.getElementById("gender").value;
    //get gender details below
    if (MM<1 || MM>12 || DD<1 || DD>31){
        alert("The value you have entered is invalid")
        return;
    }//checks validity of the values inputed. Invalid values prompt an alert
    if(MM==="" || DD==="" || YOB===""){
        alert("Please fill in all the fields to get your Name");
        return;
    }
    let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames = ["Akosua","Adowa","Abenaa","Akua","Yaa","Afua","Ama"];
    let dayOfTheWeek = parseInt((( ( (CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7));
    if (gender==="male"){
        document.getElementById("result").innerHTML=("You day of birth is "+weekDay[dayOfTheWeek]);
        document.getElementById("akanName").innerHTML = ("Your Akan Name is " + maleAkanNames[dayOfTheWeek] );
        return;
    }else (gender==="female")
        document.getElementById("result").innerHTML=("You day of birth is "+weekDay[dayOfTheWeek]);
        document.getElementById("akanName").innerHTML = ("Your Akan Name is " + femaleAkanNames[dayOfTheWeek] );
        return;
    };

