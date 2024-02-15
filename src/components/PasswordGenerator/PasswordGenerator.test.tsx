import { composeStories, render, screen, userEvent, within } from '@/tests/utils';
import { PASSWORD_REGEX } from '@/utils/password/generatePassword';

import { PASSWORD_CHARACTER_LENGTH_LABEL } from '../PasswordCharLengthSlider';
import { PASSWORD_STRENGTH_LABEL } from '../PasswordStrengthMeter';
import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';
import * as PasswordGeneratorStories from './PasswordGenerator.stories';

const { Empty, WithLength, TooWeak } = composeStories(PasswordGeneratorStories);

describe('PasswordGenerator', () => {
  describe('Layout', () => {
    it('displays password generator title', () => {
      render(<Empty />);

      const title = screen.getByRole('heading', { name: PASSWORD_GENERATOR.TITLE });

      expect(title).toBeInTheDocument();
    });

    it('displays an empty copyable text', () => {
      render(<Empty />);

      const placeHolder = screen.getByText(PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER);

      expect(placeHolder).toBeInTheDocument();
    });

    it('displays a disabled copy button icon', () => {
      render(<Empty />);

      const copyBtnIcon = screen.getByRole('button', { name: 'copy value' });

      expect(copyBtnIcon).toBeInTheDocument();
      expect(copyBtnIcon).toBeDisabled();
    });

    it('displays password character length label', () => {
      render(<Empty />);

      const label = screen.getByText(PASSWORD_CHARACTER_LENGTH_LABEL);

      expect(label).toBeInTheDocument();
    });

    it('displays password character length value as "0"', () => {
      render(<Empty />);

      const emptyValue = screen.getByText('0');

      expect(emptyValue).toBeInTheDocument();
    });

    it('displays the password character length slider at min value', () => {
      render(<Empty />);

      const slider = screen.getByRole('slider');

      expect(slider).toBeInTheDocument();
      expect(slider).toBeEnabled();

      // Use toHaveAttribute for now since aria-valuenow is not being checked in toHaveValue
      // Reference: https://github.com/testing-library/jest-dom/issues/478
      expect(slider).toHaveAttribute('aria-valuenow', '0');
    });

    it.each(Object.values(PASSWORD_RULES).map(({ label }) => ({ label })))(
      `displays an unchecked "$label" checkbox`,
      ({ label }) => {
        render(<Empty />);

        const checkbox = screen.getByRole('checkbox', { name: label });

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
      }
    );

    it('displays password strength label', () => {
      render(<Empty />);

      const strengthLabel = screen.getByText(PASSWORD_STRENGTH_LABEL);

      expect(strengthLabel).toBeInTheDocument();
    });

    it(`displays 4 empty meter bars`, () => {
      render(<Empty />);

      const meter = screen.getByRole('meter');
      const bars = within(meter).getAllByTestId('meter-bar');

      expect(bars).toHaveLength(4);
    });

    it('displays a disabled generate button by default', () => {
      render(<Empty />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      expect(generateBtn).toBeInTheDocument();
      expect(generateBtn).toBeDisabled();
    });

    it('enables the generate button when character length is greather than 0 and at least one rule checkbox is ticked', () => {
      render(<TooWeak />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      expect(generateBtn).toBeInTheDocument();
      expect(generateBtn).toBeEnabled();
    });
  });

  describe('Interaction', () => {
    it('updates the copyable text with generated password and hides the placeholder after clicking generate password', async () => {
      render(<TooWeak />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      await userEvent.click(generateBtn);

      const placeHolder = screen.queryByText(PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER);
      const value = screen.getByTestId('copyable-text-value');

      expect(placeHolder).not.toBeInTheDocument();
      expect(value).toBeInTheDocument();
    });

    it('copies the generated password after clicking the copy icon button', async () => {
      render(<TooWeak />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });
      await userEvent.click(generateBtn);

      const copyIcon = screen.getByTitle('copy value');
      await userEvent.click(copyIcon);

      const value = screen.getByTestId('copyable-text-value');

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(value.textContent);
    });

    it('generates a password of the same length as the specified character length', async () => {
      render(<TooWeak />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      await userEvent.click(generateBtn);

      const value = screen.getByTestId('copyable-text-value');

      expect(value.textContent).toHaveLength(TooWeak.args.initialCharLength as number);
    });

    it.each`
      description                                       | regExPattern                        | withUpperCase | withLowerCase | withNumbers | withSymbols
      ${'symbols only'}                                 | ${PASSWORD_REGEX.SYMBOLS}           | ${false}      | ${false}      | ${false}    | ${true}
      ${'numbers only'}                                 | ${PASSWORD_REGEX.NUMBERS}           | ${false}      | ${false}      | ${true}     | ${false}
      ${'numbers and symbols'}                          | ${PASSWORD_REGEX.NUM_SYM}           | ${false}      | ${false}      | ${true}     | ${true}
      ${'lowercase letters only'}                       | ${PASSWORD_REGEX.LOWERCASE_LETTERS} | ${false}      | ${true}       | ${false}    | ${false}
      ${'lowercase letters and symbols'}                | ${PASSWORD_REGEX.LCASE_SYM}         | ${false}      | ${true}       | ${false}    | ${true}
      ${'lowercase letters and numbers'}                | ${PASSWORD_REGEX.LCASE_NUM}         | ${false}      | ${true}       | ${true}     | ${false}
      ${'lowercase letters, numbers, and symbols'}      | ${PASSWORD_REGEX.LCASE_NUM_SYM}     | ${false}      | ${true}       | ${true}     | ${true}
      ${'uppercase letters only'}                       | ${PASSWORD_REGEX.UPPERCASE_LETTERS} | ${true}       | ${false}      | ${false}    | ${false}
      ${'uppercase letters and symbols'}                | ${PASSWORD_REGEX.UCASE_SYM}         | ${true}       | ${false}      | ${false}    | ${true}
      ${'uppercase letters and numbers'}                | ${PASSWORD_REGEX.UCASE_NUM}         | ${true}       | ${false}      | ${true}     | ${false}
      ${'uppercase letters, numbers, and symbols'}      | ${PASSWORD_REGEX.UCASE_NUM_SYM}     | ${true}       | ${false}      | ${true}     | ${true}
      ${'uppercase and lowecase letters'}               | ${PASSWORD_REGEX.UCASE_LCASE}       | ${true}       | ${true}       | ${false}    | ${false}
      ${'uppercase and lowercase letters, and symbols'} | ${PASSWORD_REGEX.UCASE_LCASE_SYM}   | ${true}       | ${true}       | ${false}    | ${true}
      ${'uppercase and lowercase letters, and numbers'} | ${PASSWORD_REGEX.UCASE_LCASE_NUM}   | ${true}       | ${true}       | ${true}     | ${false}
      ${'all options as specified'}                     | ${PASSWORD_REGEX.ALL}               | ${true}       | ${true}       | ${true}     | ${true}
    `(
      `generates a password that includes $description`,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async ({ description, regExPattern, ...optionValues }) => {
        render(<WithLength />);

        // Get all the checbkox elements that are included in the options
        const checkboxes: HTMLInputElement[] = [];

        Object.entries(PASSWORD_RULES).forEach(([key, { label }]) => {
          if (optionValues[key]) {
            checkboxes.push(
              screen.getByRole('checkbox', {
                name: label,
              })
            );
          }
        });

        // click all checkbox elements that are included
        for (const checkbox of checkboxes) {
          expect(checkbox).not.toBeChecked();

          await userEvent.click(checkbox);

          expect(checkbox).toBeChecked();
        }

        // click generate button
        const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });
        await userEvent.click(generateBtn);

        // assert that password matches each of the option cases regex
        const value = screen.getByTestId('copyable-text-value');
        expect(value).toHaveTextContent(new RegExp(regExPattern));
      }
    );
  });
});
