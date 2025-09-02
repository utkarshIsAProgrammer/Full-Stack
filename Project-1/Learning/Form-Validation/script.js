// Theme switching functionality
function toggleTheme() {
	const body = document.body;
	const themeIcon = document.getElementById("themeIcon");
	const currentTheme = body.getAttribute("data-theme");

	if (currentTheme === "dark") {
		body.setAttribute("data-theme", "light");
		themeIcon.textContent = "☀️";
		themeIcon.style.transform = "rotate(180deg)";
		localStorage.setItem("theme", "light");
	} else {
		body.setAttribute("data-theme", "dark");
		themeIcon.textContent = "🌙";
		themeIcon.style.transform = "rotate(0deg)";
		localStorage.setItem("theme", "dark");
	}
}

// Load saved theme on page load
function loadSavedTheme() {
	const savedTheme = localStorage.getItem("theme") || "dark";
	const body = document.body;
	const themeIcon = document.getElementById("themeIcon");

	body.setAttribute("data-theme", savedTheme);
	if (savedTheme === "light") {
		themeIcon.textContent = "☀️";
		themeIcon.style.transform = "rotate(180deg)";
	} else {
		themeIcon.textContent = "🌙";
		themeIcon.style.transform = "rotate(0deg)";
	}
}

// Form validation functions
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePhone(phone) {
	const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
	return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
}

function validatePassword(password) {
	// At least 8 characters, contains uppercase, lowercase, number, and special character
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumber = /\d/.test(password);
	const hasSpecialChar = /[@$!%*?&]/.test(password);
	const isLongEnough = password.length >= 8;

	return (
		isLongEnough &&
		hasUppercase &&
		hasLowercase &&
		hasNumber &&
		hasSpecialChar
	);
}

function showError(inputElement, message) {
	removeError(inputElement);

	const errorDiv = document.createElement("div");
	errorDiv.className = "error-message";
	errorDiv.textContent = message;

	// Get current theme for styling
	const currentTheme = document.body.getAttribute("data-theme");
	const isDark = currentTheme === "dark";

	errorDiv.style.cssText = `
					color: ${isDark ? "#fca5a5" : "#dc2626"};
					font-size: 0.875rem;
					margin-top: 5px;
					padding: 10px 14px;
					background: ${isDark ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.2)"};
					border: 1px solid ${
						isDark
							? "rgba(239, 68, 68, 0.3)"
							: "rgba(239, 68, 68, 0.4)"
					};
					border-radius: 12px;
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					animation: fadeIn 0.3s ease;
					font-weight: 500;
					box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
			`;

	inputElement.parentElement.appendChild(errorDiv);
	inputElement.style.borderColor = isDark ? "#f87171" : "#ef4444";
	inputElement.style.boxShadow = `0 0 0 3px ${
		isDark ? "rgba(248, 113, 113, 0.15)" : "rgba(239, 68, 68, 0.15)"
	}`;
}

function removeError(inputElement) {
	const errorMessage =
		inputElement.parentElement.querySelector(".error-message");
	if (errorMessage) {
		errorMessage.remove();
	}
	inputElement.style.borderColor = "";
	inputElement.style.boxShadow = "";
}

function showSuccess(inputElement) {
	removeError(inputElement);
	inputElement.style.borderColor = "#10b981";

	// Remove success border after 2 seconds
	setTimeout(() => {
		inputElement.style.borderColor = "";
	}, 2000);
}

function showNotification(message, type = "success") {
	const notification = document.createElement("div");
	notification.className = "notification";
	notification.textContent = message;
	notification.style.cssText = `
					position: fixed;
					top: 80px;
					right: 20px;
					padding: 15px 20px;
					border-radius: 12px;
					color: white;
					font-weight: 500;
					z-index: 10000;
					backdrop-filter: blur(20px);
					border: 1px solid rgba(255, 255, 255, 0.2);
					animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
					${
						type === "success"
							? "background: rgba(16, 185, 129, 0.9);"
							: "background: rgba(239, 68, 68, 0.9);"
					}
			`;

	document.body.appendChild(notification);

	setTimeout(() => {
		notification.remove();
	}, 3000);
}

// Real-time validation
function setupRealTimeValidation() {
	const emailInput = document.getElementById("email");
	const contactInput = document.getElementById("contact");
	const passwordInput = document.getElementById("password");
	const confirmPasswordInput = document.getElementById("confirmPassword");

	// Email validation
	emailInput.addEventListener("blur", function () {
		const email = this.value.trim();
		if (email === "") {
			showError(this, "Email address is required");
		} else if (!validateEmail(email)) {
			showError(this, "Please enter a valid email address");
		} else {
			showSuccess(this);
		}
	});

	emailInput.addEventListener("input", function () {
		if (this.value.trim() !== "" && validateEmail(this.value.trim())) {
			showSuccess(this);
		}
	});

	// Contact validation
	contactInput.addEventListener("blur", function () {
		const contact = this.value.trim();
		if (contact === "") {
			showError(this, "Contact number is required");
		} else if (!validatePhone(contact)) {
			showError(this, "Please enter a valid contact number");
		} else {
			showSuccess(this);
		}
	});

	contactInput.addEventListener("input", function () {
		if (this.value.trim() !== "" && validatePhone(this.value.trim())) {
			showSuccess(this);
		}
	});

	// Password validation
	passwordInput.addEventListener("blur", function () {
		const password = this.value;
		if (password === "") {
			showError(this, "Password is required");
		} else if (password.length < 8) {
			showError(this, "Password must be at least 8 characters long");
		} else if (!validatePassword(password)) {
			showError(
				this,
				"Password must contain: uppercase letter, lowercase letter, number, and special character (@$!%*?&)"
			);
		} else {
			showSuccess(this);
			// Revalidate confirm password if it has value
			if (confirmPasswordInput.value !== "") {
				validateConfirmPassword();
			}
		}
	});

	// Confirm password validation
	function validateConfirmPassword() {
		const password = passwordInput.value;
		const confirmPassword = confirmPasswordInput.value;

		if (confirmPassword === "") {
			showError(confirmPasswordInput, "Please confirm your password");
		} else if (password !== confirmPassword) {
			showError(confirmPasswordInput, "Passwords do not match");
		} else {
			showSuccess(confirmPasswordInput);
		}
	}

	confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
	confirmPasswordInput.addEventListener("input", function () {
		if (this.value !== "" && passwordInput.value === this.value) {
			showSuccess(this);
		}
	});
}

// Form submission handler
function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());

	let isValid = true;
	let emptyFields = 0;

	// Check for empty fields first
	const emailInput = document.getElementById("email");
	const contactInput = document.getElementById("contact");
	const passwordInput = document.getElementById("password");
	const confirmPasswordInput = document.getElementById("confirmPassword");

	if (!data.email || data.email.trim() === "") {
		showError(emailInput, "Email address is required");
		isValid = false;
		emptyFields++;
	} else if (!validateEmail(data.email)) {
		showError(emailInput, "Please enter a valid email address");
		isValid = false;
	}

	if (!data.contact || data.contact.trim() === "") {
		showError(contactInput, "Contact number is required");
		isValid = false;
		emptyFields++;
	} else if (!validatePhone(data.contact)) {
		showError(contactInput, "Please enter a valid contact number");
		isValid = false;
	}

	if (!data.password || data.password === "") {
		showError(passwordInput, "Password is required");
		isValid = false;
		emptyFields++;
	} else if (data.password.length < 8) {
		showError(passwordInput, "Password must be at least 8 characters long");
		isValid = false;
	} else if (!validatePassword(data.password)) {
		showError(
			passwordInput,
			"Password must contain: uppercase letter, lowercase letter, number, and special character (@$!%*?&)"
		);
		isValid = false;
	}

	if (!data.confirmPassword || data.confirmPassword === "") {
		showError(confirmPasswordInput, "Please confirm your password");
		isValid = false;
		emptyFields++;
	} else if (data.password !== data.confirmPassword) {
		showError(confirmPasswordInput, "Passwords do not match");
		isValid = false;
	}

	if (!isValid) {
		if (emptyFields === 4) {
			showNotification("Please fill in all required fields", "error");
		} else if (emptyFields > 0) {
			showNotification(
				`Please fill in ${
					emptyFields === 1
						? "the missing field"
						: "all missing fields"
				}`,
				"error"
			);
		} else {
			showNotification("Please fix the errors below", "error");
		}
		return;
	}

	// Simulate form submission
	const submitBtn = form.querySelector(".submit-btn");
	const originalText = submitBtn.textContent;
	submitBtn.textContent = "Creating Account...";
	submitBtn.disabled = true;
	submitBtn.style.opacity = "0.7";

	setTimeout(() => {
		showNotification(
			"Account created successfully! Welcome aboard!",
			"success"
		);
		form.reset();

		// Remove all error/success states
		document.querySelectorAll("input").forEach((input) => {
			removeError(input);
			input.style.borderColor = "";
			input.style.boxShadow = "";
		});

		submitBtn.textContent = originalText;
		submitBtn.disabled = false;
		submitBtn.style.opacity = "1";
	}, 2000);
}

// Enhanced form interactions
function setupFormInteractions() {
	document.querySelectorAll("input").forEach((input) => {
		input.addEventListener("focus", function () {
			this.parentElement.style.transform = "scale(1.02)";
			this.parentElement.style.transition = "transform 0.3s ease";
		});

		input.addEventListener("blur", function () {
			this.parentElement.style.transform = "scale(1)";
		});
	});
}

// Floating particles animation
function animateParticles() {
	document.querySelectorAll(".particle").forEach((particle, index) => {
		particle.style.animationDelay = `${index * 2}s`;

		// Random position and size variations
		const randomTop = Math.random() * 80 + 10;
		const randomLeft = Math.random() * 80 + 10;
		const randomSize = Math.random() * 40 + 40;

		particle.style.top = `${randomTop}%`;
		particle.style.left = `${randomLeft}%`;
		particle.style.width = `${randomSize}px`;
		particle.style.height = `${randomSize}px`;
	});
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
	// Load saved theme
	loadSavedTheme();

	// Setup form validation
	setupRealTimeValidation();

	// Setup form interactions
	setupFormInteractions();

	// Animate particles
	animateParticles();

	// Add form submit handler
	document.querySelector("form").addEventListener("submit", handleFormSubmit);

	// Add CSS animations
	const style = document.createElement("style");
	style.textContent = `
					@keyframes fadeIn {
							from { opacity: 0; transform: translateY(-10px); }
							to { opacity: 1; transform: translateY(0); }
					}
					
					@keyframes slideInRight {
							from { opacity: 0; transform: translateX(100px); }
							to { opacity: 1; transform: translateX(0); }
					}
					
					@keyframes fadeOut {
							from { opacity: 1; }
							to { opacity: 0; }
					}
			`;
	document.head.appendChild(style);
});
