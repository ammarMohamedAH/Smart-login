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

// Regexs
var mailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
// sign up preventDefault
signUpBtn.addEventListener("click", function (e) {
    e.preventDefault()
})

// Start event sign up
signUpBtn.addEventListener("click", signUp)
// get users data to sign up
function signUp() {
  signUpMail.style="margin-bottom: 1.5rem;";
  signUpPassword.style="margin-bottom: 1.5rem;";
    if(signUpValidation() ){
        if(signUpName.value && signUpMail.value && signUpPassword.value){
           document.getElementById("warningBoxAll").style="display:none"
           if (mailRegex.test(signUpMail.value) && passRegex.test(signUpPassword.value)) {
            var signData = {
              signUpName: signUpName.value,
              signUpEMail: signUpMail.value,
              signUpPassword: signUpPassword.value,
          }
          dataArr.push(signData);
          localStorage.setItem("usersData", JSON.stringify(dataArr));
          container.classList.remove("active");
          document.getElementById("warningBoxMailnotValid").style="display:none"
          document.getElementById("warningBoxPassnotValid").style="display:none"
          clearSignUp()
           }else if(!mailRegex.test(signUpMail.value) && passRegex.test(signUpPassword.value)){
            signUpMail.style="margin-bottom: 5px;";
            document.getElementById("warningBoxMailnotValid").style="display:block"
             document.getElementById("warningBoxPassnotValid").style="display:none"
           }else if(mailRegex.test(signUpMail.value) && !passRegex.test(signUpPassword.value)){
            signUpPassword.style="margin-bottom: 5px;";
            document.getElementById("warningBoxPassnotValid").style="display:block"
            document.getElementById("warningBoxMailnotValid").style="display:none"
           }else if(!mailRegex.test(signUpMail.value) && !passRegex.test(signUpPassword.value)){
            signUpMail.style="margin-bottom: 5px;";
            document.getElementById("warningBoxMailnotValid").style="display:block"
            signUpPassword.style="margin-bottom: 5px;";
            document.getElementById("warningBoxPassnotValid").style="display:block"
           }
        }else{
            document.getElementById("warningBoxAll").style="display:block";
            
        }
        document.getElementById("warningBoxNameUp").style="display:none"
        
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
