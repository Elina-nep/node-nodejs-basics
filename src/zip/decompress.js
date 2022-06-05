import { createUnzip } from 'node:zlib'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const decompress = async() => {
  const unzip = createUnzip();
  const source = createReadStream(path.resolve(dirname(fileURLToPath(
    import.meta.url)), "files", "archive.gz"));
  var destination = createWriteStream(path.resolve(dirname(fileURLToPath(
    import.meta.url)), "files", "fileToCompress.txt"));

  source.pipe(unzip).pipe(destination)

};

decompress()