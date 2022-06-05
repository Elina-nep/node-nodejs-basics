import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const list = async() => {
  fs.readdir(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files'), (err, files) => {
    console.log("files")
    if (err) throw new Error('FS operation failed');
    else {
      files.forEach(file => {
        console.log(file);
      });
    }
  });
};

list()