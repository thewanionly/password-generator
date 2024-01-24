import { composeStories, render, screen } from '@/tests/utils';

import * as FormControlLabelStories from './FormControlLabel.stories';

const { CheckboxWithLabel, DisabledCheckboxWithLabel } = composeStories(FormControlLabelStories);

describe('FormControlLabel', () => {
  describe('Checkbox with label', () => {
    it('displays an enabled checkbox with label', () => {
      render(<CheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeEnabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a disabled checkbox with label', () => {
      render(<DisabledCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeDisabled();
      expect(label).toBeInTheDocument();
    });
  });
});
