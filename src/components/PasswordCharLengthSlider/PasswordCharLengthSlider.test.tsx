import { composeStories, render, screen } from '@/tests/utils';

import { PASSWORD_CHARACTER_LENGTH_LABEL } from './PasswordCharLengthSlider.constants';
import * as PasswordCharLengthSliderStories from './PasswordCharLengthSlider.stories';

const { WithValue } = composeStories(PasswordCharLengthSliderStories);

describe('PasswordCharLengthSlider', () => {
  it('displays "Character Length" label', () => {
    render(<WithValue />);

    const label = screen.getByText(PASSWORD_CHARACTER_LENGTH_LABEL);

    expect(label).toBeInTheDocument();
  });

  it('displays character length value', () => {
    render(<WithValue />);

    const value = screen.getByText(WithValue.args.value ?? '');

    expect(value).toBeInTheDocument();
  });

  it('displays the slider at given value', () => {
    render(<WithValue />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();

    // Use toHaveAttribute for now since aria-valuenow is not being checked in toHaveValue
    // Reference: https://github.com/testing-library/jest-dom/issues/478
    expect(slider).toHaveAttribute('aria-valuenow', (WithValue.args.value as number).toString());
  });

  // TODO: testing of interactions with the slider
  // Currently there's no way to test/simulate how a user would interact a slider using jest and RTL.
});
