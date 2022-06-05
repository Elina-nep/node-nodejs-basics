import crypto from 'crypto';
import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const calculateHash = async() => {
  fs.readFile(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'fileToCalculateHashFor.txt'), 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(crypto.createHash('sha256').update(data).digest('hex'));
  });

};

calculateHash()