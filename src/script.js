const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const h1 = document.getElementById("h1");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
	// using constrain API
	isValid = form.checkValidity();
	// style main message for an error

	if (!isValid) {
		message.textContent = "Fill out all fields";
		messageContainer.style.backgroundColor = "#ffd4d4";
		message.style.color = "#ff8979";
		// return : to stop further check
		return;
	}
	// check if passwords match
	if (password1El.value === password2El.value) {
		passwordsMatch = true;
		password1El.style.borderColor = "#79ff8f";
		password2El.style.borderColor = "#79ff8f";
	} else {
		passwordsMatch = false;
		message.textContent = "Match passwords";
		messageContainer.style.backgroundColor = "#ffd4d4";
		message.style.color = "#ff8979";
		password1El.style.borderColor = "#ff8979";
		password2El.style.borderColor = "#ff8979";
		// return : to stop further check
		return;
	}
	//   if form is valid and passwords match
	if (isValid && passwordsMatch) {
		passwordsMatch = true;
		message.textContent = "Successfully Register";
		messageContainer.style.backgroundColor = "#deffe4";
		message.style.color = "#006b12";
		password1El.style.borderColor = "#79ff8f";
		password2El.style.borderColor = "#79ff8f";
		form.style.display = "none";
		h1.textContent = `You're in!!!`;
	}
}

function storeFormData() {
	const user = {
		name: form.name.value,
		phone: form.phone.value,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value
	};
	// do something with user data
	console.log(user);
}

function proccessFormData(e) {
	e.preventDefault();

	//   validate form
	validateForm();

	//   submit if valid
	if (isValid && passwordsMatch) {
		storeFormData();
	}
}

form.addEventListener("submit", proccessFormData);