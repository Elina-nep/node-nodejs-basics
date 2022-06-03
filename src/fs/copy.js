import fs from 'fs';
import * as path from 'path';


export const copy = async() => {

  fs.access(path.resolve('files'), (err) => {
    if (err) throw new Error('FS operation failed1')
    fs.access(path.resolve('files_copy'), (err) => {
      if (!err) throw new Error('FS operation failed');
      if (err) fs.mkdir(path.resolve('files_copy'), (err) => {
        if (err) throw new Error('FS operation failed');
      })
      fs.readdir(path.resolve('files'), (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.forEach(file => {
          fs.copyFile(path.resolve('files', file), path.resolve('files_copy', file), err => {
            if (err) throw new Error('FS operation failed2')
          })
        });
      });
    })
  })
}
copy()