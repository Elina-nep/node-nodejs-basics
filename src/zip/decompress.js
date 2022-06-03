import { createUnzip } from 'node:zlib'
import path from 'path'

import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const decompress = async() => {
  const unzip = createUnzip();
  const source = createReadStream(path.resolve("files", "archive.gz"));
  var destination = createWriteStream(path.resolve("files", "fileToCompress.txt"));

  source.pipe(unzip).pipe(destination)

};