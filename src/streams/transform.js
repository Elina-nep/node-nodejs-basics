import { Transform } from 'stream'

export const transform = async() => {

  const reverse = new Transform({
    transform(line, enc, cb) {
      this.push([...line.toString()].reverse().join(""));
      cb()
    }
  });

  process.stdin.pipe(reverse).pipe(process.stdout)

};

transform()