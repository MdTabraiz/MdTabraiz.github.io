function validateForm(event) {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;

  let warning = document.getElementById("warning");

  if (email == "") {
    warning.innerText = "Email is a Required Field";
    event.preventDefault();
  }
  if (name == "") {
    warning.innerText = "Name is a Required Field";
    event.preventDefault();
  }

  if (email != "" && name != "") {
    warning.style.display = "none";
    formSubmitted();
    event.preventDefault();
  }

  return false;
}

function formSubmitted() {
  let form = document.getElementById("form");
  let message = document.getElementById("message");
  message.innerText = "Thank you for Connecting with Me";
  form.style.display = "none";
}
