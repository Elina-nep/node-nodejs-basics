import crypto from 'crypto';
import fs from 'fs';
import * as path from 'path';

export const calculateHash = async() => {
  fs.readFile(path.resolve('files', 'fileToCalculateHashFor.txt'), 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(crypto.createHash('sha256').update(data).digest('hex'));
  });

};

calculateHash()