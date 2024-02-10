import { generatePassword } from './generatePassword';
import { DEFAULT_PASSWORD_LENGTH } from './generatePassword.constants';

describe('generatePassword', () => {
  describe('no arguments passed', () => {
    it(`generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes all options by default`, () => {
      const password = generatePassword();

      expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
      // TODO:
      // check if password has uppercase
      // check if password has lowercase
      // check if password has numbers
      // check if password has symbols
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
