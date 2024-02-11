import { generatePassword } from './generatePassword';
import {
  DEFAULT_PASSWORD_LENGTH,
  INVALID_INPUT_ERROR_MESSAGES,
  PASSWORD_REGEX,
} from './generatePassword.constants';

describe('generatePassword', () => {
  describe('no arguments passed', () => {
    it(`generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes all options by default`, () => {
      const password = generatePassword();

      expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
      expect(password).toMatch(PASSWORD_REGEX.ALL);
    });
  });

  describe('invalid inputs', () => {
    it('throws an error when length is 0', () => {
      expect(() => generatePassword(0)).toThrow(INVALID_INPUT_ERROR_MESSAGES.LENGTH);
    });

    it('throws an error when all options are false', () => {
      expect(() =>
        generatePassword(12, {
          withUpperCase: false,
          withLowerCase: false,
          withNumbers: false,
          withSymbols: false,
        })
      ).toThrow(INVALID_INPUT_ERROR_MESSAGES.OPTIONS);
    });
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
