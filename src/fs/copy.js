import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const copy = async() => {

  fs.access(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files'), (err) => {
    if (err) throw new Error('FS operation failed1')
    fs.access(path.resolve(dirname(fileURLToPath(
      import.meta.url)), 'files_copy'), (err) => {
      if (!err) throw new Error('FS operation failed');
      if (err) fs.mkdir(path.resolve(dirname(fileURLToPath(
        import.meta.url)), 'files_copy'), (err) => {
        if (err) throw new Error('FS operation failed');
      })
      fs.readdir(path.resolve(dirname(fileURLToPath(
        import.meta.url)), 'files'), (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.forEach(file => {
          fs.copyFile(path.resolve(dirname(fileURLToPath(
            import.meta.url)), 'files', file), path.resolve(dirname(fileURLToPath(
            import.meta.url)), 'files_copy', file), err => {
            if (err) throw new Error('FS operation failed2')
          })
        });
      });
    })
  })
}
copy()