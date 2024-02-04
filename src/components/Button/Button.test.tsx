import { composeStories, render, screen, userEvent, waitFor, within } from '@/tests/utils';

import * as ButtonStories from './Button.stories';

const { Enabled, Disabled, WithIcon, WithIconDisabled } = composeStories(ButtonStories);

describe('Button', () => {
  it('displays an enabled button with the passed label', () => {
    render(<Enabled />);

    const btn = screen.getByRole('button', { name: 'Enabled' });

    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();
  });

  it('displays a disabled button with the passed label', () => {
    render(<Disabled />);

    const btn = screen.getByRole('button', { name: 'Disabled' });

    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  it('displays an enabled button with icon', () => {
    render(<WithIcon />);

    const btn = screen.getByRole('button', { name: 'Enabled' });
    const arrowRightIcon = within(btn).getByTitle('arrow right');

    expect(btn).toBeInTheDocument();
    expect(arrowRightIcon).toBeInTheDocument();
    expect(btn).toBeEnabled();
  });

  it('displays a disabled button with icon', () => {
    render(<WithIconDisabled />);

    const btn = screen.getByRole('button', { name: 'Disabled' });
    const arrowRightIcon = within(btn).getByTitle('arrow right');

    expect(btn).toBeInTheDocument();
    expect(arrowRightIcon).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  it('calls the function passed in the `onClick` prop when button is clicked', async () => {
    const onClickHandler = jest.fn();
    render(<Enabled onClick={onClickHandler} />);

    const btn = screen.getByRole('button', { name: 'Enabled' });
    await userEvent.click(btn);

    await waitFor(() => expect(onClickHandler).toHaveBeenCalled());
  });
});
