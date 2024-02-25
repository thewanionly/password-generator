import { composeStories, render, screen, userEvent, waitFor } from '@/tests/utils';

import { COPIED_DURATION, COPIED_TEXT } from './CopyableText.constants';
import * as CopyableTextStories from './CopyableText.stories';

const { Empty, WithValue } = composeStories(CopyableTextStories);

describe('CopyableText', () => {
  it(`displays placeholder when there's no value`, () => {
    render(<Empty />);

    const placeHolder = screen.getByText(Empty.args.placeholder as string);

    expect(placeHolder).toBeInTheDocument();
  });

  it(`displays value when there's a value`, () => {
    render(<WithValue />);

    const value = screen.getByText(WithValue.args.value as string);

    expect(value).toBeInTheDocument();
  });

  it(`displays copy icon`, () => {
    render(<WithValue />);

    const copyIcon = screen.getByTitle('copy value');
    expect(copyIcon).toBeInTheDocument();
  });

  it(`copies the value when copy icon is clicked`, async () => {
    render(<WithValue />);

    const copyIcon = screen.getByTitle('copy value');
    await userEvent.click(copyIcon);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(WithValue.args.value);
  });

  it(`displays ${COPIED_TEXT} when copy icon is clicked`, async () => {
    render(<WithValue />);

    const copyIcon = screen.getByTitle('copy value');

    await userEvent.click(copyIcon);

    const copiedText = screen.getByText(COPIED_TEXT);

    expect(copiedText).toBeInTheDocument();
  });

  it(`hides ${COPIED_TEXT} after ${COPIED_DURATION} ms after copy icon is clicked`, async () => {
    render(<WithValue />);

    const copyIcon = screen.getByTitle('copy value');

    await userEvent.click(copyIcon);

    const copiedText = screen.getByText(COPIED_TEXT);
    expect(copiedText).toBeInTheDocument();

    await waitFor(() => expect(copiedText).not.toBeInTheDocument(), { timeout: COPIED_DURATION });
  });
});
