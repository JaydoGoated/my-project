// alert("How are you today?")

// Target the element 
let myButton = document.getElementById("button1")

myButton.addEventListener("click",function(){
    alert("Button has been clicked!")
})

// Array of options to populate the feeling dropdown
let feelingOptions = [
  // Option for users who feel anxious
  { value: "anxious", text: "Anxious" },
  // Option for users who feel tired
  { value: "tired", text: "Tired" },
  // Option for users who feel overwhelmed
  { value: "overwhelmed", text: "Overwhelmed" },
  // Option for users who feel stressed
  { value: "stressed", text: "Stressed" },
  // Option for users who feel panicked
  { value: "panicked", text: "Panicked" },
  // Option for users who feel nervous
  { value: "nervous", text: "Nervous" },
  // Option for any other feeling not listed above
  { value: "other", text: "Other" }
];

// Get the empty select element from the HTML
let feelingSelect = document.getElementById("feeling");

// Loop through each item in the feelingOptions array
feelingOptions.forEach(function (option) {
  // Create a new <option> element for the dropdown
  let optionElement = document.createElement("option");
  // Set the value that JavaScript will read when the user picks this option
  optionElement.value = option.value;
  // Set the label text shown to the user in the dropdown
  optionElement.textContent = option.text;
  // Add the new option into the select dropdown
  feelingSelect.appendChild(optionElement);
});

// Function that reads the user's feeling and displays a matching coping strategy
function findCopingStrategy() {
  // Get the dropdown element where the user selects their feeling
  let feelingInput = document.getElementById("feeling");
  // Read the selected option's value and convert to lowercase for comparison
  let feeling = feelingInput.value.trim().toLowerCase();
  // Get the output div where the strategy message will be displayed
  let outputDiv = document.getElementById("strategyOutput");
  // Create a variable to store the strategy message (starts empty)
  let strategy = "";
  // Check if the user selected "anxious"
  if (feeling === "anxious") {
    // Set the coping strategy for anxious feelings
    strategy = "Try the 4-7-8 breathing technique: breathe in for 4 seconds, hold for 7, exhale for 8.";
  // Otherwise, check if the user selected "tired"
  } else if (feeling === "tired") {
    // Set the coping strategy for tired feelings
    strategy = "Take a short break, drink water, and rest your eyes for 5 minutes before continuing.";
  // Otherwise, check if the user selected "overwhelmed"
  } else if (feeling === "overwhelmed") {
    // Set the coping strategy for overwhelmed feelings
    strategy = "Write down your top three tasks and focus on just one at a time.";
  // Otherwise, check if the user selected "stressed"
  } else if (feeling === "stressed") {
    // Set the coping strategy for stressed feelings
    strategy = "Step away for 2 minutes, stretch your shoulders, and remind yourself that one exam does not define you.";
  // Otherwise, check if the user selected "panicked"
  } else if (feeling === "panicked") {
    // Set the coping strategy for panicked feelings
    strategy = "Plant your feet on the floor, name 5 things you can see, and breathe slowly until your heartbeat steadies.";
  // Otherwise, check if the user selected "nervous"
  } else if (feeling === "nervous") {
    // Set the coping strategy for nervous feelings
    strategy = "Review one small thing you already know well, then take three slow breaths before you continue.";
  // If the user selected "other"
  } else {
    // Set a default coping strategy for any other input
    strategy = "Take a moment to pause, breathe deeply, and reach out to someone you trust.";
  }
  // Put the chosen strategy text inside the output div so the user can read it
  outputDiv.textContent = strategy;
}

// Get the "Find a strategy" button element from the page
let findStrategyButton = document.getElementById("findStrategy");
// When the button is clicked, run the findCopingStrategy function
findStrategyButton.addEventListener("click", findCopingStrategy);