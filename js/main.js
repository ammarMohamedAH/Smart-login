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

var mailIn = document.getElementById("mailIn");
var passwordIn = document.getElementById("passwordIn");
var signInBtn = document.querySelector("#signIn-btn");
var signInBtnLink = document.querySelector("#signIn-btn a");

signInBtn.addEventListener("click", function () {
  if (mailIn.value && passwordIn.value) {
    if (logInMail() && logInPass()) {
      window.location.href = "mainpage.html";
      localStorage.setItem("user", user);
      document.getElementById("warningBoxMailin").style = "display:none";
    } else {
      document.getElementById("warningBoxMailin").style = "display:block";
    }

    document.getElementById("warningBoxAllin").style = "display:none";
  } else {
    document.getElementById("warningBoxAllin").style = "display:block";
  }
});

var user = "";
var pass = "";
function logInMail() {
  for (let i = 0; i < dataArr.length; i++) {
    if (mailIn.value.toLowerCase() === dataArr[i].signUpEMail.toLowerCase()) {
      user = dataArr[i].signUpName;
      pass = dataArr[i].signUpPassword;
      return true;
    }
  }
  return false;
}
function logInPass() {
  if (passwordIn.value === pass) {
    return true;
  }

  return false;
}
