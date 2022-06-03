export const parseEnv = () => {
  Object.keys(process.env).forEach(el => {
    if (el.startsWith('RSS_')) {
      console.log(process.env[el])
    }
  });
};

parseEnv()