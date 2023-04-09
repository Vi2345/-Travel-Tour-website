function myFunction(){
        var x = document.getElementById("icon");
        var Menu = document.querySelector('.icon i');
        if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
          Menu.classList.toggle('fa-solid fa-bars');
        } else {
          Menu.classList.toggle('fa-xmark');
          x.style.visibility = "visible";
        }
};
var swiper = new Swiper(".Home-slider", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const form=document.getElementById("form");
var nField=document.getElementById("name");
var nlabel=document.getElementById("name-label");
var nerror=document.getElementById("n-error");
var emailField=document.getElementById("mail");
var emaillabel=document.getElementById("mail-label");
var emailerror=document.getElementById("e-error");
var pField=document.getElementById("phone");
var plabel=document.getElementById("phone-label");
var perror=document.getElementById("p-error");
var addField=document.getElementById("address");
var addlabel=document.getElementById("address-label");
var adderror=document.getElementById("a-error")
var locationField=document.getElementById("location");
var locationlabel=document.getElementById("location-label");
var locationerror=document.getElementById("l-error");
var guestField=document.getElementById("guests");
var guestlabel=document.getElementById("guests-label");
var guesterror=document.getElementById("g-error");
var arrivalField=document.getElementById("Arrival-date");
var arrivallabel=document.getElementById("Arrival-label");
var arrivalerror=document.getElementById("Ad-error");
var leavingField=document.getElementById("leaving-date");
var leavinglabel=document.getElementById("leaving-label");
var leavingerror=document.getElementById("le-error");

function validatename()
{
    if(nField.value===""){
    nerror.innerHTML="please enter the  name";
    nField.style.border="2px solid red";
    return false;
    }
    else if(nField.value.length<4 || nField.value.length>15){
        nerror.innerHTML="Characters of the First name should be Min 4 and Max 15";
        nField.style.border="2px solid red";
        return false;
    }

    else{
        nerror.innerHTML="";
        nField.style.border="2px solid green";
        return true; 

    }

};

function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
};
function validatephone()
{
    if(pField.value===""){
    perror.innerHTML="please enter your Mobile number";
    pField.style.border="2px solid red";
    return false;
    }
    else if((isNaN(pField.value) || pField.value.length<10 || pField.value.length>10)){
        perror.innerHTML="please enter the valid mobile number ";
        pField.style.border="2px solid red";
        return false;
    }

    else{
        perror.innerHTML="";
        pField.style.border="2px solid green";
        return true; 

    }
  };

  function validateaddress()
{
    if(addField.value===""){
        adderror.innerHTML="Address cannot be blank";
        addField.style.bordercolor="red";
        return false;
        }

        else if(!addField.value.match(/^[a-z A-Z 0-9.]*$/)){
            adderror.innerHTML ="Please Enter a Valid address";
            addField.style.border = "2px solid red";
            return false;
        }
    
        else{
            adderror.innerHTML="";
            addField.style.border="2px solid green";
            return true; 
    
        }
};


function validatelocation()
{
    if(locationField.value===""){
        locationerror.innerHTML="Please enter your Touring place.";
        locationField.style.border="2px solid red";
        return false;
        }

   else{
        locationerror.innerHTML="";
        locationField.style.border="2px solid green";
       return true; 
    
        }   

};

function validateguests()
{
    if(guestField.value===""){
        guesterror.innerHTML="please enter the number of guests";
        guestField.style.border="2px solid red";
        return false;
        }

      
  
        else{
            guesterror.innerHTML="";
            guestField.style.border="2px solid green";
            return true; 
    
        }
};

function validateArrival()
{
    if(arrivalField.value===""){
        arrivalerror.innerHTML="Please enter the Arrival date";
        arrivalField.style.border="2px solid red";
        return false;
        }
       
  
        else{
            arrivalerror.innerHTML="";
            arrivalField.style.border="2px solid green";
            return true; 
    
        } 
    
};

function validateLeaving()
{
    if(leavingField.value===""){
        leavingerror.innerHTML="Please enter the leaving date";
        leavingField.style.border="2px solid red";
        return false;
        }
       
  
        else{
            leavingerror.innerHTML="";
            leavingField.style.border="2px solid green";
            return true; 
    
        } 
    
};

form.addEventListener('submit',e=>{
  e.preventDefault();
  checkinput();
 });

 function checkinput() {
  const namevalue = nField.value.trim();
  const emailvalue = emailField.value.trim();
  const phonevalue=  pField.value.trim();
  const addressvalue = addField.value.trim();
  const locationvalue= locationField.value.trim();
  const guestvalue = guestField.value.trim();
  const arrivalvalue = arrivalField.value.trim();
  const leavingvalue = leavingField.value.trim();


  document.write("Name:"+" "+namevalue + "<br>");;
  document.write("Email id:"+" " + emailvalue + "<br>");
  document.write("Phone Number:"+" " +phonevalue + "<br>");
  document.write("Address:"+" " + addressvalue + "<br>");
  document.write("Location:"+" " + locationvalue + "<br>");
  document.write("Number of Guests:"+" " + guestvalue + "<br>");
  document.write("Arrival Date:"+" " +arrivalvalue + "<br>");
  document.write("Leaving Date:"+" " + leavingvalue + "<br>");


 }