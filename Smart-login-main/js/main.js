var regestrationBtn = document.getElementById("register");
var container = document.getElementById("container");
var loginBtn = document.getElementById("login");


regestrationBtn.addEventListener("click", () => {
    container.classList.add("active");
});


loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});



// Sign Up 
var signUpName = document.getElementById("nameUp");
var signUpMail = document.getElementById("mailUp");
var signUpPassword = document.getElementById("passwordUp");
var signUpBtn = document.getElementById("signUp-btn");
var dataArr;
if (JSON.parse(localStorage.getItem("usersData"))) {
    dataArr = JSON.parse(localStorage.getItem("usersData"));
} else {

    dataArr = [];
}

// sign up preventDefault
signUpBtn.addEventListener("click", function (e) {
    e.preventDefault()
})

// Start event sign up
signUpBtn.addEventListener("click", signUp)
// get users data to sign up
function signUp() {

    if(signUpValidation() ){
        if(signUpName.value && signUpMail.value && signUpPassword.value){
            var signData = {
                signUpName: signUpName.value,
                signUpEMail: signUpMail.value,
                signUpPassword: signUpPassword.value,
            }
            dataArr.push(signData);
            localStorage.setItem("usersData", JSON.stringify(dataArr));
            container.classList.remove("active");
            document.getElementById("warningBoxAll").style="display:none"
            clearSignUp()
        }else{
            document.getElementById("warningBoxAll").style="display:block";
            
        }
        document.getElementById("warningBoxNameUp").style="display:none"
        signUpMail.style="margin-bottom: 1.5rem;";
    }else{
        signUpMail.style="margin-bottom: 5px;";
        document.getElementById("warningBoxNameUp").style="display:block"
    }
}

 function signUpValidation() {
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i].signUpEMail.toLowerCase() === signUpMail.value.toLowerCase()) {
            return false;
        }
    }
    return true;
}




function clearSignUp() {
    signUpName.value=null;
    signUpMail.value=null;
    signUpPassword.value=null;
}

// Sign In
