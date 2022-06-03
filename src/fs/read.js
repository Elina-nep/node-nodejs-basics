import fs from 'fs';
import * as path from 'path';

export const read = async() => {
  fs.readFile(path.resolve('files', 'fileToRead.txt'), 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(data);
  });
};

read()