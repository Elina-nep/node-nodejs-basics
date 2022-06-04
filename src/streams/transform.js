import fs from 'fs';
import path from 'path';
import readline from 'readline';

export const transform = async() => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Start your text here: \n'
  });
  rl.prompt();
  rl.on('line', (line) => {


    console.log('All saved!');

    process.exit(0);

  }).on('close', () => {
    outputFile.close();
    process.exit(0);

  });
};

transform()