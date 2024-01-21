import { composeStory, render, screen } from '@/tests/utils';

import Meta, { Primary as PrimaryButtonStory } from './Button.stories';

const ButtonPrimary = composeStory(PrimaryButtonStory, Meta);

describe('Button', () => {
  it('displays a button with the passed label', () => {
    render(<ButtonPrimary />);

    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
  });

  xit('displays a button with passed icon', () => {
    // TODO:
    render(<ButtonPrimary />);

    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
  });
});
