import chalk from "chalk";

const error = (inputError: unknown): void => {
  console.error(chalk.red("ERROR:"), inputError);
};

const warn = (...warnings: unknown[]): void => {
  console.warn(chalk.yellow("WARN:"), ...warnings);
};

const info = (...informations: unknown[]): void => {
  console.info(chalk.green("INFO:"), ...informations);
};

export const logger = { error, warn, info };
