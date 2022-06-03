import fs from 'fs';
import * as path from 'path';

export const rename = async() => {
  fs.access(path.resolve('files', 'properFilename.md'), (err) => {
    if (!err) throw new Error('FS operation failed')
    fs.rename(path.resolve('files', 'wrongFilename.txt'), path.resolve('files', 'properFilename.md'), err => {
      if (err) throw new Error('FS operation failed')

    });
  })
};

rename()