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
