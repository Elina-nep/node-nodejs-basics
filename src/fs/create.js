import { promises as fs } from 'fs';
import * as path from 'path';

export const create = async() => {
  let existFile;
  try {
    existFile = await fs.readFile(path.resolve('files', 'fresh.txt'))
  } catch {}

  if (existFile) { throw new Error('FS operation failed'); }
  await fs.writeFile(path.resolve('files', 'fresh.txt'), 'I am fresh and young');
};

create()