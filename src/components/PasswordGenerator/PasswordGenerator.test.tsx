import { composeStories, render, screen } from '@/tests/utils';

import { PASSWORD_GENERATOR } from './PasswordGenerator.constants';
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
  });
});
