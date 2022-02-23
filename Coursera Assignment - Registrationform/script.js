


function validateForm(){

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('cpass').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;


// constraints for validation

    if((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML ="* Username length must be between 2 and 20!";
        return false;	
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML ="* Only characters are allowed!";
        return false;
    }


    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passwords').innerHTML ="* Passwords lenght must be between  5 and 20";
        return false;	
    }


    if(pass!=confirmpass){
        document.getElementById('conpasswords').innerHTML ="* Both paswords do not match!";
        return false;
    }



    if(age>99){
        document.getElementById('age').innerHTML ="* Age should be less than 99!";
        return false;
    }

    else{
        return true;
    }

    
}