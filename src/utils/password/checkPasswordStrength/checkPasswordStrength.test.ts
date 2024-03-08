import { checkPasswordStrength } from './checkPasswordStrength';
import { PasswordStrength } from './checkPasswordStrength.constants';

describe('checkPasswordStrength', () => {
  describe('invalid input', () => {
    it(`returns empty strngth and a value of 0 when password is empty`, () => {
      const { strength, value } = checkPasswordStrength('');

      expect(strength).toBe('');
      expect(value).toBe(0);
    });
  });

  describe('different strengths', () => {
    it('returns "too weak" and a value of 1 when password has 8 repeated characters', () => {
      const { strength, value } = checkPasswordStrength('aaaaaaaa');

      expect(strength).toBe(PasswordStrength.TOO_WEAK);
      expect(value).toBe(1);
    });

    it('returns "weak" and a value of 2 when password has length of 9 and has only letters', () => {
      const { strength, value } = checkPasswordStrength('cRIqlZwirx');

      expect(strength).toBe(PasswordStrength.WEAK);
      expect(value).toBe(2);
    });

    it('returns "medium" and a value of 3 when password has length of 12 and has letters and numbers', () => {
      const { strength, value } = checkPasswordStrength('fpjEtCW5Ls5E');

      expect(strength).toBe(PasswordStrength.MEDIUM);
      expect(value).toBe(3);
    });

    it('returns "strong" and a value of 4 when password has length of 20 and has letters, numbers, and symbols', () => {
      const { strength, value } = checkPasswordStrength('up&AEG}Lx3[Vn2;Mo&v');

      expect(strength).toBe(PasswordStrength.STRONG);
      expect(value).toBe(4);
    });
  });
});
