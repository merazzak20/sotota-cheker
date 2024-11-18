// script.js

document.getElementById("checkGrammar").addEventListener("click", checkGrammar);

async function checkGrammar() {
  const textInput = document.getElementById("textInput").value;
  const output = document.getElementById("output");

  if (!textInput) {
    output.innerText = `Please enter text to check.`;

    return;
  }

  // Call LanguageTool API
  const response = await fetch("https://api.languagetoolplus.com/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      text: textInput,
      language: "en-US",
    }),
  });

  const data = await response.json();

  // Parse and display suggestions
  output.innerHTML = "";
  if (data.matches && data.matches.length > 0) {
    data.matches.forEach((match) => {
      const issue = document.createElement("p");
      issue.innerHTML = `Issue: <strong>${match.message}</strong><br>
                         Suggestion: <em>${
                           match.replacements.map((r) => r.value).join(", ") ||
                           "No suggestions"
                         }</em>`;
      output.appendChild(issue);
    });
  } else {
    output.innerText = "No grammar issues found!";
  }
}
