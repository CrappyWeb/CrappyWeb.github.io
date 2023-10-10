// Initialize variables for min and max increase
let minIncrease = 1;
let maxIncrease = 10;

// Initialize the counter
let counter = 0;

// Initialize the update interval (default: 1000 milliseconds)
let updateInterval = 1000;

// Initialize a variable to track whether the counter is paused
let isPaused = false;

// Function to update the counter
function updateCounter() {
  if (!isPaused) {
    // Generate a random number between minIncrease and maxIncrease
    const randomIncrease = Math.floor(Math.random() * (maxIncrease - minIncrease + 1)) + minIncrease;

    // Update the counter
    counter += randomIncrease;

    // Display the counter with commas
    const formattedCounter = counter.toLocaleString();
    
    // Replace the class with the formatted counter
    const element = document.querySelector(".Type__TypeElement-sc-goli3j-0.ieTwfQ.nYg_xsOVmrVE_8qk1GCW");
    if (element) {
      element.textContent = formattedCounter;
    }
  }
}

// Function to start or restart the interval
function startInterval() {
  clearInterval(interval);
  interval = setInterval(updateCounter, updateInterval);
}

// Initial update of the counter
updateCounter();

// Interval to update the counter every second
let interval = setInterval(updateCounter, updateInterval);

// Event listener for the "s" key to pause/unpause the counter
document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    isPaused = !isPaused;
  }
});

// Event listener for the "c" key to set new min and max values
document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    const newMin = parseInt(prompt("Enter a new minimum value:"));
    const newMax = parseInt(prompt("Enter a new maximum value:"));

    if (!isNaN(newMin) && !isNaN(newMax) && newMin <= newMax) {
      minIncrease = newMin;
      maxIncrease = newMax;
    } else {
      alert("Invalid input. Please enter valid minimum and maximum values.");
    }
  }
});

// Event listener for the "i" key to set a new update interval
document.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    const newInterval = parseInt(prompt("Enter a new update interval in milliseconds:"));

    if (!isNaN(newInterval) && newInterval > 0) {
      updateInterval = newInterval;
      startInterval();
    } else {
      alert("Invalid input. Please enter a valid positive number for the update interval.");
    }
  }
});
