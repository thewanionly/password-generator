import { composeStories, render, screen, userEvent, waitFor, within } from '@/tests/utils';

import * as ButtonStories from './Button.stories';

const { Primary, WithIcon } = composeStories(ButtonStories);

describe('Button', () => {
  it('displays a button with the passed label', () => {
    render(<Primary />);

    const btn = screen.getByRole('button', { name: 'Primary' });

    expect(btn).toBeInTheDocument();
  });

  it('displays a button with icon', () => {
    render(<WithIcon />);

    const btn = screen.getByRole('button', { name: 'Primary' });
    const arrowRightIcon = within(btn).getByTitle('arrow right');

    expect(btn).toBeInTheDocument();
    expect(arrowRightIcon).toBeInTheDocument();
  });

  it('calls the function passed in the `onClick` prop when button is clicked', async () => {
    const onClickHandler = jest.fn();
    render(<Primary onClick={onClickHandler} />);

    const btn = screen.getByRole('button', { name: 'Primary' });
    await userEvent.click(btn);

    await waitFor(() => expect(onClickHandler).toHaveBeenCalled());
  });
});
