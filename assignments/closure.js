// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const number = 5;

function first (number) {
  const math = number;
  console.log(math);
   //debugger;

  function second() {
    const moreMath = 10;
    console.log(moreMath + math);
    //debugger;

    function third() {
      const moreMoreMath = 15;
      console.log(moreMath + moreMoreMath + math);
      //debugger;
    }
    third();
  }
second();
}
first();


// ==== Challenge 2: Create a counter function ====
let accumulator = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  console.log(accumulator++);

};
counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

