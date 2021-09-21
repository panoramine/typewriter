const sentence = "Hello there from lighthouse labs";
let counter = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 + counter);
  counter += 50;
};

let i = sentence.length;
setTimeout(() => {
  console.log('\n')
}, 50 * i * 1.5);
