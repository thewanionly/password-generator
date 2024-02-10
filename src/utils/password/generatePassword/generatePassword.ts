import { DEFAULT_PASSWORD_LENGTH } from './generatePassword.constants';

type PasswordOptions = {
  withUpperCase: boolean;
  withLowerCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generatePassword = (
  length = DEFAULT_PASSWORD_LENGTH,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: PasswordOptions = {
    withUpperCase: true,
    withLowerCase: true,
    withNumbers: true,
    withSymbols: true,
  }
): string => {
  return Array.from({ length }, () => getRandomNumber(0, 9)).join('');
};
