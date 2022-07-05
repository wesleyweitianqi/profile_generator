const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const info = {};

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  info.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    info.activity = answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          rl.question('Which sport is your absolute favourite?', (answer) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!',(answer) => {
              console.log('Thank you for your valuable feedback');
              rl.close();
            });
          });
        });
      });
    });
  });
});
        

      

    

 




