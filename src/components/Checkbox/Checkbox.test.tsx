import { composeStories, render, screen } from '@/tests/utils';

import * as CheckboxStories from './Checkbox.stories';

const { Default, WithLabel } = composeStories(CheckboxStories);

describe('Checkbox', () => {
  it('displays the checkbox', () => {
    render(<Default />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('displays the checkbox with label', () => {
    render(<WithLabel />);

    const checkboxWithLabel = screen.getByLabelText(WithLabel.args.label ?? '');

    expect(checkboxWithLabel).toBeInTheDocument();
  });
});
