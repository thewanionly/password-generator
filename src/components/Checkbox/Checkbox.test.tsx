import { composeStories, render, screen } from '@/tests/utils';

import * as CheckboxStories from './Checkbox.stories';

const { Unchecked, WithLabeUnchecked } = composeStories(CheckboxStories);

describe('Checkbox', () => {
  it('displays the checkbox', () => {
    render(<Unchecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('displays the checkbox with label', () => {
    render(<WithLabeUnchecked />);

    const checkboxWithLabel = screen.getByLabelText(WithLabeUnchecked.args.label ?? '');

    expect(checkboxWithLabel).toBeInTheDocument();
  });
});
