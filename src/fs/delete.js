import { promises as fs } from 'fs';
import * as path from 'path';

export const remove = async() => {
  try { await fs.unlink(path.resolve('files', 'fileToRemove.txt')) } catch { throw new Error('FS operation failed') }
};

remove()