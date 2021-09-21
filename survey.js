const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`Hi ${answer}, you love ${answer2} and listening to ${answer3}. You also like ${answer4} and ${answer5}. Your favourite sport and superpower are ${answer6} and ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

