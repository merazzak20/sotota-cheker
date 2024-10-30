// Sticky Navbar
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY >= 80) {
    nav.classList.add("sticky");
  } else {
  }
  nav.classList.remove("sticky");
});

// JavaScript function to update the character count

function updateCharacterCount() {
  const textInput = document.getElementById("textInput");
  const charCount = document.getElementById("charCount");

  // Update character count dynamically
  charCount.textContent = `${textInput.value.length}/1000`;
}

document.getElementById("btnPlagiarism").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value;
  const resultField = document.getElementById("resultField");
  const resultFieldContainer = document.getElementById("resultFieldContainer");
  if (textInput.length !== 0) {
    resultFieldContainer.classList.remove("hidden");
  } else {
    alert("No content is Uploaded.");
  }
  console.log(textInput);
  resultField.append(textInput);
});

updateCharacterCount();
