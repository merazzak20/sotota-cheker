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
  charCount.textContent = `${textInput.value.length}/10000`;
}

updateCharacterCount();
