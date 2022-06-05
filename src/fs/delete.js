import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const remove = async() => {
  try {
    await fs.unlink(path.resolve(dirname(fileURLToPath(
      import.meta.url)), 'files', 'fileToRemove.txt'))
  } catch { throw new Error('FS operation failed') }
};

remove()