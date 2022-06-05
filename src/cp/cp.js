import { spawn } from 'node:child_process';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'


export const spawnChildProcess = async(args) => {
  const myPath = path.resolve(dirname(fileURLToPath(
    import.meta.url)), 'files', 'script.js')
  const script = spawn('node', [myPath, ...args]);

  script.stdout.on('data', (data) => {
    process.stdout.write(data)
  });

  script.on('exit', (code) => {
    console.log('Child process closed with code:', code)
    process.exit(0)
  });

  script.stderr.on('data', (err) => {
    console.error('Child process stderr:', err);
  });

  process.stdin.on('data', (data) => {
    script.stdin.write(data)
  })
};

spawnChildProcess(process.argv)