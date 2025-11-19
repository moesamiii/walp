const scriptURL =
  "https://script.google.com/macros/s/AKfycbzMeujcqX220WN5fI4voVdGnc-Alv2SkFYm8YMIYBgC263Bg4xAMgSkeRfqSDmt0DKB9A/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Serialize form data to a URL-encoded string
  const formData = new URLSearchParams(new FormData(form)).toString();

  // Send form data using fetch with the keepalive flag
  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
    keepalive: true, // Ensures request completes even if the page unloads
  }).catch((error) => console.error("Error in submission:", error));

  // Redirect immediately without waiting
  window.location.href = "thankyou.html";
});
