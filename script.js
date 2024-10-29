// Do Now: Find the IDs - open the Dev Tool's console
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let secretFound = false; // Fixed typo for "Secret"
const guessed = [];

const checkAnswer = () => {
  // Retrieve and standardize the input value
  const currentAnswer = textBox.value.trim().toLowerCase(); 
  console.log(currentAnswer);

  // Check if the answer has already been guessed
  if (guessed.includes(currentAnswer)) {
    statusBox.innerHTML = `Girl you guessed"${textBox.value}" already. Try a another borough or try for the the secret answer!`;
    textBox.value = ""; 
    return; 
  }

  // Match against boroughs; Add text to output and increment score
  if (currentAnswer === "manhattan") {
    outputBox.innerHTML += "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>";
    score += 1;
  } else if (currentAnswer === "queens") {
    outputBox.innerHTML += "<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>";
    score += 1;
  } else if (currentAnswer === "brooklyn") {
    outputBox.innerHTML += "<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>"; 
    score += 1;
  } else if (currentAnswer === "the bronx") {
    outputBox.innerHTML += "<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>"; 
    score += 1;
  } else if (currentAnswer === "staten island") {
    outputBox.innerHTML += "<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>";
    score += 1;
  } else if (currentAnswer === "chinatown" || currentAnswer === "west village") {
    outputBox.innerHTML += `<h3>${textBox.value}</h3><p>Wow! You are smart! Secret one found.</p>`;
    secretFound = true; // Change the boolean variable to true
  } else {
    statusBox.innerHTML = `Sorry, but "${textBox.value}" is not a borough in NYC!`;
  }

  // Add the current answer to the guessed array
  guessed.push(currentAnswer);

  // Check if score = 5 and if the secret has been found
  checkScore();

  // Reset the textBox
  textBox.value = "";
};

textBox.addEventListener("change", checkAnswer);

// Creating the function 
function checkScore() {
  if (score === 5 && secretFound) { // If the score is equal to 5 and secret is found
    statusBox.innerText = "Congratulations! You've found all five boroughs AND the secret answers!";
    textBox.disabled = true; // Disable the input field
  } else if (score === 5) {
    statusBox.innerText = "Congratulations, you found all five boroughs!";
    textBox.disabled = true; // Disable the input field
  }
}


// Manhattan - `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
// Brooklyn - `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
// Bronx - `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
// Queens - `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
// Staten Island - `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`
