#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

//console.log( JSON.stringify( require( './me.json' ), null, 3 ) );

const actions = {
  Twitter() {
    opn("https://twitter.com/vaaPo");
  },
  Facebook() {
    opn("https://www.facebook.com/vaapo");
  },
  Blog() {
    opn("http://paavo.muranen.fi/");
  },
  GitHub() {
    opn("https://github.com/vaaPo");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Paavo Muranen", {
  font: "chrome",
  colors: ["blue", "white", "blue"]
});

console.log(`Hello, this is Paavo Muranen
geeky signature!
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Twitter",
        "Facebook",
        "Blog",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
});
