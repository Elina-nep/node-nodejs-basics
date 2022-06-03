export const parseArgs = () => {
  // Write your code here 
  let conMess = [];
  process.argv.forEach((el, index) => {
    if (el.startsWith('--'))
      conMess.push(`${el.slice(2)} is value ${process.argv[index+1]}`)

  });

  console.log(conMess.join(', '))
};

parseArgs()