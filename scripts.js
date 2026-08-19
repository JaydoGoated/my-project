 alert("Rember that you're mental health is important, and it's okay to ask for help when you need it. Take care of yourself and prioritize your well-being.");
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

// Create a blank placeholder so the dropdown looks empty until opened
let placeholderOption = document.createElement("option");
// Empty value means no feeling has been chosen yet
placeholderOption.value = "";
// No visible text so the closed dropdown appears blank
placeholderOption.textContent = "Select how you are feeling";
// User cannot pick this option from the list
placeholderOption.disabled = true;
// Show this option when the page first loads
placeholderOption.selected = true;
// Hide this option when the user opens the dropdown
placeholderOption.hidden = true;
// Add the blank placeholder before the real feeling options
feelingSelect.appendChild(placeholderOption);

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
  // If nothing has been selected yet, ask the user to choose a feeling
  if (feeling === "") {
    // Show a message prompting the user to open the dropdown and pick an option
    outputDiv.textContent = "Please select an option first.";
    // Stop the function so no strategy is shown yet
    return;
  }
if (feeling === "anxious") {
    strategy = "Try the 4-7-8 breathing technique, a method used to calm the nervous system quickly. Sit or stand comfortably, close your eyes if that feels safe, and breathe in slowly through your nose for a count of 4. Hold that breath gently for a count of 7 — don't strain, just hold. Then exhale slowly and completely through your mouth for a count of 8, letting your shoulders drop as you release the air. Repeat this full cycle 4 to 5 times, or until you feel your heartbeat begin to settle. This works because slow, controlled breathing directly signals your brain's nervous system that there is no immediate danger, which can ease the racing thoughts, tight chest, and restlessness that often come with anxiety. It won't make the anxious feeling disappear completely, but it can bring it down to a level where you can think more clearly.";
  } else if (feeling === "tired") {
    strategy = "Give yourself permission to step away from your books for 5 to 10 minutes — tiredness is not laziness, it's your body asking for a genuine reset. Drink a full glass of water, since even mild dehydration can make tiredness and difficulty concentrating worse. Rest your eyes by looking at something far away, ideally outside a window, rather than staring at another screen or page during your break. If you can, stand up, stretch, or step outside for a few minutes of fresh air and natural light. Studying while exhausted often means information doesn't stick as well anyway, so a short, intentional break can actually make your next study session more productive than pushing through without one.";
  } else if (feeling === "overwhelmed") {
    strategy = "When everything feels like too much at once, grab a piece of paper or open a notes app and write down absolutely everything on your mind — every task, worry, and deadline, even the small or messy ones. Don't organize it yet, just get it out of your head and onto the page. Once it's written down, go back through and circle only the top three things that genuinely need your attention today. Cross out or set aside everything else for now — it will still be there later. Then choose just one of those three tasks and focus only on that, ignoring the rest until it's done or you've made real progress. Overwhelm often isn't about how much work there actually is — it's about trying to hold too many things in your mind simultaneously. Writing it down and narrowing your focus to one task at a time can make an unmanageable-feeling day start to feel possible again.";
  } else if (feeling === "stressed") {
    strategy = "Step away from whatever you're working on for 2 to 3 minutes — this isn't giving up, it's resetting. Stand up if you're sitting, and slowly roll your shoulders backward a few times, then gently stretch your neck side to side. Take three or four slow, deep breaths as you do this. While you stretch, remind yourself honestly: one exam, one paper, one mock result, or even one bad day of studying does not define your intelligence, your worth, or your entire future. Exams measure a snapshot of performance on one day — they don't measure who you are as a person. Once you've taken this short pause, return to your work with whatever small amount of calm you've regained, even if it's not complete relief. Small resets, repeated often, add up over an exam season.";
  } else if (feeling === "panicked") {
    strategy = "If you can, plant both feet firmly flat on the floor and consciously notice the feeling of solid ground beneath you — this is called grounding, and it helps interrupt a panic spiral by pulling your attention back into your body and the present moment. Then slowly work through your senses: name 5 things you can see around you right now, even small details like a pen or a shadow. Name 4 things you can physically touch or feel, like your clothing or the chair beneath you. Name 3 things you can hear, even faint background sounds. Name 2 things you can smell. Finally, name 1 thing you can taste, even if it's just the inside of your mouth. Breathe slowly and steadily as you go through each step — you don't need to rush it. This technique works because panic often comes from your mind racing into fear about the future; grounding forcibly brings your attention back to right now, where, in this exact moment, you are safe.";
  } else if (feeling === "nervous") {
    strategy = "Instead of trying to cram or review everything at once when nervousness hits, choose one small, specific topic that you already know well and briefly go over it in your head or on paper. This isn't about learning something new right now — it's about reminding your brain of what you do already know, rather than spiraling into thoughts about everything you're afraid you don't. Once you've done that, take three slow, deep breaths, in through your nose and out through your mouth, before continuing with your day or your exam. It's worth remembering that nervousness before something important is a completely normal human response — it doesn't mean you're unprepared, and it doesn't predict how well you'll actually perform.";
  } else {
    strategy = "Whatever you're feeling right now, even if you can't quite name it, it's valid, and you don't have to carry it entirely on your own. Take a moment to simply pause where you are and take a few slow, deep breaths. If it feels possible, try reaching out to someone you trust — a parent, guardian, teacher, sibling, or close friend — even with just a short message or a few spoken words. You don't need the perfect explanation or the right words to start that conversation; simply saying 'I'm struggling a bit right now' is enough of a beginning. Talking about what's weighing on you, even briefly, often makes the weight feel lighter than carrying it silently.";
  }
  // Put the chosen strategy text inside the output div so the user can read it
  outputDiv.textContent = strategy;
}

// Get the "Find a strategy" button element from the page
let findStrategyButton = document.getElementById("findStrategy");
// When the button is clicked, run the findCopingStrategy function
findStrategyButton.addEventListener("click", findCopingStrategy);

