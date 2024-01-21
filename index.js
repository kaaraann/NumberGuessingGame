// A Number guessing game ;
const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess the Number Between  ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a Only valid Number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid Number");
  } else {
    attempts++;
    if (guess < ans) {
      window.alert("Too low! try again");
    } else if (guess > ans) {
      window.alert("Too High! try again");
    } else {
      window.alert(
        `Your are correct answer ${ans}. it took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
