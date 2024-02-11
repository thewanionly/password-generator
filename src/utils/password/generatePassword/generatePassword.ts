import { DEFAULT_PASSWORD_LENGTH, CHARACTERS } from './generatePassword.constants';

type PasswordOptions = {
  withUpperCase: boolean;
  withLowerCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
};

export const generatePassword = (
  length = DEFAULT_PASSWORD_LENGTH,
  options: PasswordOptions = {
    withUpperCase: true,
    withLowerCase: true,
    withNumbers: true,
    withSymbols: true,
  }
): string => {
  let password = '',
    includedChars = '';

  // Determine all included characters based on the `options`
  const { withUpperCase, withLowerCase, withNumbers, withSymbols } = options;

  if (withUpperCase) includedChars += CHARACTERS.UPPERCASE_LETTERS;
  if (withLowerCase) includedChars += CHARACTERS.LOWERCASE_LETTERS;
  if (withNumbers) includedChars += CHARACTERS.NUMBERS;
  if (withSymbols) includedChars += CHARACTERS.SYMBOLS;

  // Gerenate one random character from the included characters `length` times
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * includedChars.length);
    password += includedChars[randomIndex];
  }

  return password;
};
