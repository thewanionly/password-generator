import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components/Checkbox';

import { FormControlLabel } from './FormControlLabel';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof FormControlLabel> = {
  component: FormControlLabel,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof FormControlLabel>;

export const CheckboxWithLabel: Story = {
  args: {
    id: 'checkbox-test',
    label: 'Include Numbers',
    control: ({ id, required, disabled }) => (
      <Checkbox id={id} required={required} disabled={disabled} />
    ),
  },
};

export const DisabledCheckboxWithLabel: Story = {
  args: {
    id: 'checkbox-test',
    label: 'Include Numbers',
    disabled: true,
    control: ({ id, required, disabled }) => (
      <Checkbox id={id} required={required} disabled={disabled} />
    ),
  },
};
