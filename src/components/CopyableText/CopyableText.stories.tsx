import type { Meta, StoryObj } from '@storybook/react';

import { CopyableText } from './CopyableText';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof CopyableText> = {
  component: CopyableText,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof CopyableText>;

export const Empty: Story = {
  args: {
    className: 'w-80',
    value: '',
    placeholder: 'P4$5W0rD!',
  },
};

export const WithValue: Story = {
  args: {
    className: 'w-80',
    value: 'PTx1f5DaFX',
    placeholder: 'P4$5W0rD!',
  },
};
