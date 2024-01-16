import { render, screen } from '@/tests/utils';

import { Button } from './Button';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="wani" />);

    expect(screen.getByRole('button', { name: 'wani' })).toBeInTheDocument();
  });
});
