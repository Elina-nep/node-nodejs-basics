import fs from 'fs';
import * as path from 'path';

export const list = async() => {
  fs.readdir(path.resolve('files'), (err, files) => {
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