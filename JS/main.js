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
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("couter");

let count = 0;
function updateCharacterCount() {
  const inputValue = textInput.value.length;
  charCount.innerText = inputValue;
}
textInput.addEventListener("keyup", () => updateCharacterCount());

// Plagiarism BTN
// document.getElementById("btnPlagiarism").addEventListener("click", function () {
//   const textInput = document.getElementById("textInput").value;
//   const resultField = document.getElementById("resultField");
//   const resultFieldContainer = document.getElementById("resultFieldContainer");
//   if (textInput.length !== 0) {
//     resultFieldContainer.classList.remove("hidden");
//   } else {
//     alert("No content is Uploaded.");
//   }
//   console.log(textInput);
//   resultField.append(textInput);
// });

// copyText BTN
// document.getElementById("coyText").addEventListener("click", () => {
//   textInput.select();
//   textInput.setSelectionRange(0, 10000); //Mobile virsion
//   navigator.clipboard.writeText(textInput.value); //copy text from textarea
//   navigator.clipboard
//     .writeText(textInput.value) // Copy the text
//     .then(() => {
//       alert("Text copied successfully!"); // Notify user
//     })
//     .catch((err) => {
//       console.error("Failed to copy text: ", err);
//     });
// });

const copyText = () => {
  textInput.select();
  textInput.setSelectionRange(0, 10000); //Mobile virsion
  navigator.clipboard.writeText(textInput.value); //copy text from textarea
};
