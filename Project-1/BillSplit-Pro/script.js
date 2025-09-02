let currentSplitMode = "even";
let currentDiners = [];
let taxMode = "dollar"; // 'dollar' or 'percent'
let tipMode = "dollar"; // 'dollar' or 'percent'

function setTaxMode(mode, element) {
	taxMode = mode;
	const siblings = element.parentElement.querySelectorAll(".toggle-option");
	siblings.forEach((s) => s.classList.remove("active"));
	element.classList.add("active");

	const input = document.getElementById("taxAmount");
	input.placeholder =
		mode === "dollar" ? "Enter tax amount" : "Enter tax percentage";
	calculateSplit();
}

function setTipMode(mode, element) {
	tipMode = mode;
	const siblings = element.parentElement.querySelectorAll(".toggle-option");
	siblings.forEach((s) => s.classList.remove("active"));
	element.classList.add("active");

	const input = document.getElementById("tipAmount");
	input.placeholder =
		mode === "dollar" ? "Enter tip amount" : "Enter tip percentage";
	calculateSplit();
}

function toggleTheme() {
	const body = document.body;
	const currentTheme = body.getAttribute("data-theme");
	const newTheme = currentTheme === "light" ? "dark" : "light";

	body.setAttribute("data-theme", newTheme);

	const themeIcon = document.getElementById("themeIcon");
	const themeText = document.getElementById("themeText");

	if (newTheme === "dark") {
		themeIcon.textContent = "☀️";
		themeText.textContent = "Light Mode";
	} else {
		themeIcon.textContent = "🌙";
		themeText.textContent = "Dark Mode";
	}

	// Store theme preference
	localStorage.setItem("theme", newTheme);
}

function setSplitMode(mode) {
	currentSplitMode = mode;
	document.querySelectorAll(".mode-btn").forEach((btn) => {
		btn.classList.remove("active");
	});
	event.target.classList.add("active");

	const dinersContainer = document.getElementById("dinersContainer");
	if (mode === "uneven") {
		dinersContainer.classList.add("show");
		updateDiners();
	} else {
		dinersContainer.classList.remove("show");
		calculateSplit();
	}
}

function updateDiners() {
	const count = parseInt(document.getElementById("diners").value) || 2;
	const container = document.getElementById("dinersContainer");

	// Update current diners array
	while (currentDiners.length < count) {
		currentDiners.push({
			name: `Person ${currentDiners.length + 1}`,
			amount: 0,
		});
	}
	currentDiners = currentDiners.slice(0, count);

	// Generate HTML
	container.innerHTML = currentDiners
		.map(
			(diner, index) => `
          <div class="diner-item fade-in">
              <input type="text" class="input-field diner-name" 
                     placeholder="Person ${index + 1}" 
                     value="${diner.name}"
                     onchange="updateDinerName(${index}, this.value)">
              <input type="number" class="input-field diner-amount" 
                     placeholder="0.00" 
                     step="0.01"
                     value="${diner.amount || ""}"
                     onchange="updateDinerAmount(${index}, this.value)">
          </div>
      `
		)
		.join("");

	calculateSplit();
}

function updateDinerName(index, name) {
	currentDiners[index].name = name || `Person ${index + 1}`;
	calculateSplit();
}

function updateDinerAmount(index, amount) {
	currentDiners[index].amount = parseFloat(amount) || 0;
	calculateSplit();
}

function calculateSplit() {
	const bill = parseFloat(document.getElementById("billAmount").value) || 0;
	const taxInput =
		parseFloat(document.getElementById("taxAmount").value) || 0;
	const tipInput =
		parseFloat(document.getElementById("tipAmount").value) || 0;
	const service =
		parseFloat(document.getElementById("serviceAmount").value) || 0;
	const diners = parseInt(document.getElementById("diners").value) || 2;

	// Calculate tax amount
	let tax = 0;
	if (taxMode === "percent") {
		tax = (bill * taxInput) / 100;
	} else {
		tax = taxInput;
	}

	// Calculate tip amount
	let tip = 0;
	if (tipMode === "percent") {
		tip = (bill * tipInput) / 100;
	} else {
		tip = tipInput;
	}

	const total = bill + tax + tip + service;

	// Update breakdown
	document.getElementById("breakdownBill").textContent = `${bill.toFixed(2)}`;
	document.getElementById("breakdownTax").textContent = `${tax.toFixed(2)}${
		taxMode === "percent" ? ` (${taxInput}%)` : ""
	}`;
	document.getElementById("breakdownTip").textContent = `${tip.toFixed(2)}${
		tipMode === "percent" ? ` (${tipInput}%)` : ""
	}`;
	document.getElementById(
		"breakdownService"
	).textContent = `${service.toFixed(2)}`;
	document.getElementById("breakdownTotal").textContent = `${total.toFixed(
		2
	)}`;
	document.getElementById("totalAmount").textContent = `${total.toFixed(2)}`;

	if (currentSplitMode === "even") {
		const perPerson = total / diners;
		document.getElementById("perPerson").textContent = `${perPerson.toFixed(
			2
		)} per person`;
	} else {
		const customTotal = currentDiners.reduce(
			(sum, diner) => sum + (diner.amount || 0),
			0
		);
		if (customTotal > 0) {
			document.getElementById(
				"perPerson"
			).textContent = `Custom split totaling ${customTotal.toFixed(2)}`;
		} else {
			document.getElementById(
				"perPerson"
			).textContent = `Enter custom amounts for each person`;
		}
	}
}

function copyToClipboard() {
	const bill = parseFloat(document.getElementById("billAmount").value) || 0;
	const taxInput =
		parseFloat(document.getElementById("taxAmount").value) || 0;
	const tipInput =
		parseFloat(document.getElementById("tipAmount").value) || 0;
	const service =
		parseFloat(document.getElementById("serviceAmount").value) || 0;
	const diners = parseInt(document.getElementById("diners").value) || 2;

	// Calculate actual amounts
	let tax = taxMode === "percent" ? (bill * taxInput) / 100 : taxInput;
	let tip = tipMode === "percent" ? (bill * tipInput) / 100 : tipInput;
	const total = bill + tax + tip + service;

	let text = `🎯 BillSplit Pro Results\n\n`;
	text += `💰 Bill Breakdown:\n`;
	text += `• Bill Amount: ${bill.toFixed(2)}\n`;
	text += `• Tax: ${tax.toFixed(2)}${
		taxMode === "percent" ? ` (${taxInput}%)` : ""
	}\n`;
	text += `• Tip: ${tip.toFixed(2)}${
		tipMode === "percent" ? ` (${tipInput}%)` : ""
	}\n`;
	text += `• Service Fee: ${service.toFixed(2)}\n`;
	text += `• Total: ${total.toFixed(2)}\n\n`;

	if (currentSplitMode === "even") {
		const perPerson = total / diners;
		text += `👥 Split evenly among ${diners} people:\n`;
		text += `💵 ${perPerson.toFixed(2)} per person\n`;
	} else {
		text += `👥 Custom split:\n`;
		currentDiners.forEach((diner, index) => {
			text += `• ${diner.name}: ${(diner.amount || 0).toFixed(2)}\n`;
		});
	}

	navigator.clipboard.writeText(text).then(() => {
		showNotification("Bill split copied to clipboard! ✨");
	});
}

function shareResult() {
	// if (navigator.share) {
	// const total =
	// (parseFloat(document.getElementById("billAmount").value) || 0) +
	// (parseFloat(document.getElementById("taxAmount").value) || 0) +
	// (parseFloat(document.getElementById("tipAmount").value) || 0) +
	// (parseFloat(document.getElementById("serviceAmount").value) || 0);
	//
	// navigator.share({
	// title: "BillSplit Pro Results",
	// text: `Check out our bill split: Total ${total.toFixed(
	// 2
	// )} split among ${
	// document.getElementById("diners").value || 2
	// } people`,
	// url: window.location.href,
	// });
	// } else {
	// copyToClipboard();
	// }
	//
	showNotification("Share link feature coming soon! ⛓️‍💥");
}

function exportToPDF() {
	showNotification("PDF export feature coming soon! 📄");
}

function showNotification(message) {
	const notification = document.getElementById("notification");
	notification.textContent = message;
	notification.classList.add("show");
	setTimeout(() => {
		notification.classList.remove("show");
	}, 3000);
}

// Initialize theme from localStorage
function initializeTheme() {
	const savedTheme = localStorage.getItem("theme") || "light";
	document.body.setAttribute("data-theme", savedTheme);

	const themeIcon = document.getElementById("themeIcon");
	const themeText = document.getElementById("themeText");

	if (savedTheme === "dark") {
		themeIcon.textContent = "☀️";
		themeText.textContent = "Light Mode";
	} else {
		themeIcon.textContent = "🌙";
		themeText.textContent = "Dark Mode";
	}
}

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
	initializeTheme();
	updateDiners();
	calculateSplit();
});
