import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const create = async() => {
  let existFile;
  try {
    existFile = await fs.readFile(path.resolve(dirname(fileURLToPath(
      import.meta.url)), 'files', 'fresh.txt'))
  } catch {}

  if (existFile) { throw new Error('FS operation failed'); }
  await fs.writeFile(path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'fresh.txt'), 'I am fresh and young');
};

create()