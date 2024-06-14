function loadFormData() {
  const formData = JSON.parse(sessionStorage.getItem("formData"));
  if (formData) {
    Object.keys(formData).forEach((key) => {
      const input = document.querySelector(`[name="${key}"]`);
      if (input) {
        input.value = formData[key];
      }
    });
  }
}

// Function to save form data to session storage
function saveFormData() {
  const formData = {};
  document.querySelectorAll("input").forEach((input) => {
    formData[input.name] = input.value;
  });
  sessionStorage.setItem("formData", JSON.stringify(formData));
}

// Load form data when the page loads
window.addEventListener("load", loadFormData);

// Save form data when any input field changes
document.getElementById("item-form").addEventListener("input", saveFormData);
