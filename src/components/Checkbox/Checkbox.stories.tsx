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

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const WithLabelUnchecked: Story = {
  args: {
    label: 'Include Numbers',
    defaultChecked: false,
    disabled: false,
  },
};

export const WithLabelChecked: Story = {
  args: {
    label: 'Include Numbers',
    defaultChecked: true,
    disabled: false,
  },
};
