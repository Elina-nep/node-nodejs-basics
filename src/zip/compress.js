import { createGzip } from 'node:zlib'
import path from 'path'

import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const compress = async() => {
  const gzip = createGzip();
  const source = createReadStream(path.resolve("files", "fileToCompress.txt"));
  var destination = createWriteStream(path.resolve("files", "archive.gz"));

  source.pipe(gzip).pipe(destination)

};