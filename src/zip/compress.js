import { createGzip } from 'node:zlib'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const compress = async() => {
  const gzip = createGzip();
  const source = createReadStream(path.resolve(dirname(fileURLToPath(
    import.meta.url)), "files", "fileToCompress.txt"));
  var destination = createWriteStream(path.resolve(dirname(fileURLToPath(
    import.meta.url)), "files", "archive.gz"));

  source.pipe(gzip).pipe(destination)

};

compress()