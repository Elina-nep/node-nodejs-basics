import fs from 'fs';
import path from 'path';

export const read = async() => {
  const readableStream = fs.createReadStream(
    path.join('files', 'fileToRead.txt'),
    'utf-8'
  );
  let data = '';

  readableStream.on('data', chunk => data += chunk);
  readableStream.on('end', () => process.stdout.write(data));
  readableStream.on('error', error => console.log('Error', error.message));
};

read()