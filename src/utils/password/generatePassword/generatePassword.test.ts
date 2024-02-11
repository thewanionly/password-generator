import { generatePassword } from './generatePassword';
import { DEFAULT_PASSWORD_LENGTH, PASSWORD_REGEX } from './generatePassword.constants';

describe('generatePassword', () => {
  describe('no arguments passed', () => {
    it(`generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes all options by default`, () => {
      const password = generatePassword();

      expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
      expect(password).toMatch(PASSWORD_REGEX.UPPERCASE_LETTERS);
      expect(password).toMatch(PASSWORD_REGEX.LOWERCASE_LETTERS);
      expect(password).toMatch(PASSWORD_REGEX.NUMBERS);
      expect(password).toMatch(PASSWORD_REGEX.SYMBOLS);
    });
  });

  describe('invalid inputs', () => {
    xit('throws an error when length is 0', () => {});

    xit('throws an error when length is greater than 0 but all options are false', () => {});

    xit('throws an error when all options are false', () => {});
  });

  describe('length specified, no options passed', () => {
    xit('generates password with specified length and includes all options', () => {
      // TODO:
    });
  });

  describe('length specified, one option specified', () => {
    xit(`generates password with specified length and includes only the specified option`, () => {
      const password = generatePassword();

      expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
      // TODO:
      // check if password has uppercase
    });
  });

  describe('length not specified, option/s specified', () => {
    xit(`generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes all options as specified`, () => {
      // TODO:
    });

    // TODO:
    // add more test cases here. Ideally it should be 16 test cases in total
  });
});
