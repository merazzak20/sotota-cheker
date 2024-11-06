const fakeUsers = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" },
  { email: "user4@example.com", password: "password4" },
  { email: "user5@example.com", password: "password5" },
  { email: "user6@example.com", password: "password6" },
  { email: "user7@example.com", password: "password7" },
  { email: "user8@example.com", password: "password8" },
  { email: "user9@example.com", password: "password9" },
  { email: "user10@example.com", password: "password10" },
];

const login = () => {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("message");

  const user = fakeUsers.find(
    (user) => user.email === emailInput && user.password === passwordInput
  );

  if (user) {
    message.textContent = "Login successful!";
    message.classList.remove("text-red-600");
    message.classList.add("text-green-600");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    my_modal_1.showModal();
  } else {
    alert("Invalid email or password.");
    message.textContent = "Invalid email or password.";
    message.classList.remove("text-green-600");
    message.classList.add("text-red-600");
    // my_modal_3.showModal(); // Optional: You can show a modal for error here
  }
};
