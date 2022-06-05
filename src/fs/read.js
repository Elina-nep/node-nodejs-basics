import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const read = async() => {

  fs.readFile(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'fileToRead.txt'), 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(data);
  });
};

read()