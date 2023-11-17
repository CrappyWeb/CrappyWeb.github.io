let counter = 0;
let isPaused = false;
let minIncrease = 1;
let maxIncrease = 10;
let interval = 1000; // 1 second

function updateCounter() {
  if (!isPaused) {
    const elements = document.querySelectorAll('.Ydwa1P5GkCggtLlSvphs');
    counter += Math.floor(Math.random() * (maxIncrease - minIncrease + 1)) + minIncrease;
    elements.forEach((element) => {
      element.textContent = counter.toLocaleString() + ' monthly listeners';
    });
  }
}

setInterval(updateCounter, interval);

document.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    isPaused = !isPaused;
  } else if (event.key === 'c') {
    const newMinIncrease = prompt('Enter new minimum increase:');
    const newMaxIncrease = prompt('Enter new maximum increase:');
    if (!isNaN(newMinIncrease) && !isNaN(newMaxIncrease)) {
      minIncrease = parseInt(newMinIncrease);
      maxIncrease = parseInt(newMaxIncrease);
    }
  } else if (event.key === 'i') {
    const newInterval = prompt('Enter new interval in milliseconds:');
    if (!isNaN(newInterval)) {
      interval = parseInt(newInterval);
    }
  }
});
