function validate() {
  let password = document.getElementById("password");
  let confirm_password = document.getElementById("confirm-password");
  let msg = document.getElementById("invalid message");
  if (password.value === confirm_password.value) {
    window.alert("Successful");
  } else {
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    msg.innerHTML = "*Passwords do not match";
    msg.style.color = "red";
    msg.style.fontSize = "12px";
  }
}
