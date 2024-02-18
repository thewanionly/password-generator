import { DEFAULT_PASSWORD_LENGTH } from '@/constants/password';

import { CHARACTERS, INVALID_INPUT_ERROR_MESSAGES } from './generatePassword.constants';
import { PasswordOptions } from './generatePassword.types';

export const generatePassword = (
  length = DEFAULT_PASSWORD_LENGTH,
  options: PasswordOptions = {
    withUpperCase: true,
    withLowerCase: true,
    withNumbers: true,
    withSymbols: true,
  }
): string => {
  // throw an error when length is zero and below
  if (length <= 0) throw new Error(INVALID_INPUT_ERROR_MESSAGES.LENGTH);

  // throw an error when all options are false
  if (Object.values(options).every((option) => !option))
    throw new Error(INVALID_INPUT_ERROR_MESSAGES.OPTIONS);

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
