function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.add("active");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("active");
    }
  }