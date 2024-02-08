import { composeStories, render, screen } from '@/tests/utils';

import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';
import * as PasswordGeneratorStories from './PasswordGenerator.stories';

const { Empty } = composeStories(PasswordGeneratorStories);

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

    it.each(PASSWORD_RULES.map(({ label }) => ({ label })))(
      `displays unchecked "$label" checkbox`,
      ({ label }) => {
        render(<Empty />);

        const checkbox = screen.getByRole('checkbox', { name: label });

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
      }
    );

    it('displays a disabled generate button by default', () => {
      render(<Empty />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      expect(generateBtn).toBeInTheDocument();
      expect(generateBtn).toBeDisabled();
    });
  });
});
