import path from 'path';
import os from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(
  import.meta.url)
const __dirname = dirname(__filename)

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject =
    import ('./files/a.json', { assert: { type: 'json' } });
} else {
  unknownObject =
    import ('./files/b.json', { assert: { type: 'json' } });
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});