import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const WithLabel: Story = {
  args: {
    id: 'withLabel',
    label: 'Include Numbers',
    disabled: false,
  },
};
