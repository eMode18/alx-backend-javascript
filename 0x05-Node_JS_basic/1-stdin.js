const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
rl.on('line', (input) => {
  // Display the user's name obtained from INPUT
  console.log(`Your name is: ${input}`);
});

// Display msg on program end (e.g., presses Ctrl+C or closes the terminal)
rl.on('close', () => {
  console.log('This important software is now closing');
});
