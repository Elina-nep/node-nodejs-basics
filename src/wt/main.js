import path from 'path';
import {
  Worker,
} from 'node:worker_threads';
import os from 'os'

export const performCalculations = async() => {
  const cpuCount = os.cpus().length
  const results = [];
  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(path.resolve('worker.js'), { workerData: i + 10 })
    const result = new Promise((resolve) => {
      let data;
      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({
            status: 'error',
            data: null
          })
        } else {
          resolve({
            status: 'resolved',
            data
          })
        }
      })
      worker.on('message', (message) => {
        data = message;
      })
    })
    results.push(result);
  }
  return Promise.all(results)
};

performCalculations().then(results => console.log(results))