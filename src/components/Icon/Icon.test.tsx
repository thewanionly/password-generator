import * as Icons from '@/components/Icon';
import { composeStories, render, screen } from '@/tests/utils';

import * as IconStories from './Icon.stories';

const { AllIcons } = composeStories(IconStories);

describe('Icon', () => {
  it.each(Object.keys(Icons).map((name) => ({ name })))(`displays $name icon`, ({ name }) => {
    render(<AllIcons />);

    const icon = screen.getByTitle(name);

    expect(icon).toBeInTheDocument();
  });
});
