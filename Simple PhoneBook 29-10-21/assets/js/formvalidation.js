


function validation(){


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('number').value;

    var namecheck = /^[A-Za-z.]{5,25}$/;
    var emailcheck = /^[A-Za-z_.]{5,}[0-9]{1,}@[A-Za-z_]{3,}[.]{1}[A-Za-z_]{2,10}$/;
    var numbercheck = /^[0]{1}[0-9]{10}$/;
    // document.getElementById("save").disabled = true;

if(namecheck.test(name)){
    document.getElementById('nameerror').innerHTML = " ";
    document.getElementById("save").disabled = false;
}
else{
    document.getElementById('nameerror').innerHTML = "Invalid Name";
    document.getElementById("save").disabled = true;
    return false;
    
}

if(emailcheck.test(email)){
    document.getElementById('emailerror').innerHTML = " ";
    document.getElementById("save").disabled = false;
}
else{
    document.getElementById('emailerror').innerHTML = "Invalid Email";
    document.getElementById("save").disabled = true;
    return false;
}
if(numbercheck.test(phone)){
    document.getElementById('numbererror').innerHTML = " ";
    document.getElementById("save").disabled = false;
}     
else{
    document.getElementById('numbererror').innerHTML = "Invalid Phone No.";
    document.getElementById("save").disabled = true;
    return false;
}

}

