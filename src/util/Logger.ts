import chalk from "chalk";

const logger = {
  info: (message) => {
    console.log(`${chalk.greenBright("[INFO]:")} ${message}`);
  },
  error: (message) => {
    console.log(`${chalk.redBright("[ERROR]:")}  ${message}`);
  },
  warn: (message) => {
    console.log(`${chalk.yellowBright("[WARN]:")}  ${message}`);
  },
};

export default logger;
