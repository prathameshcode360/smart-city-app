// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const alertBox = document.getElementById("alertBox"); // Get alert box element

  // Login credentials
  const validUsername = "admin";
  const validPassword = "admin123";

  // Add submit event listener
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      // Show invalid credentials alert
      alertBox.textContent = "Oops! Invalid credentials";
      alertBox.classList.remove("d-none"); // Make the alert visible

      // Hide the alert after 3 seconds
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 3000);
    }
  });
});
