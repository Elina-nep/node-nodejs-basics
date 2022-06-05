import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const write = async() => {
  const outputFile = fs.createWriteStream(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'fileToWrite.txt'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Start your text here: \n'
  });
  rl.prompt();
  rl.on('line', (line) => {
    outputFile.write(line + '\n');
    console.log('All saved!');
    outputFile.close();
    process.exit(0);

  }).on('close', () => {
    outputFile.close();
    process.exit(0);

  });
};

write()