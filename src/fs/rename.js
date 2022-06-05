import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const rename = async() => {
  fs.access(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'properFilename.md'), (err) => {
    if (!err) throw new Error('FS operation failed')
    fs.rename(path.resolve(dirname(fileURLToPath(
      import.meta.url)), 'files', 'wrongFilename.txt'), path.resolve(dirname(fileURLToPath(
      import.meta.url)), 'files', 'properFilename.md'), err => {
      if (err) throw new Error('FS operation failed')

    });
  })
};

rename()