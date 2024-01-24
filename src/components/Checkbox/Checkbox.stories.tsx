import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

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

const ControlledCheckbox = ({ defaultChecked = false, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(newChecked: boolean) => {
        setChecked(newChecked);
      }}
      defaultChecked={defaultChecked}
      {...props}
    />
  );
};

export const Unchecked: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
};

export const Checked: Story = {
  render: (args) => <ControlledCheckbox {...args} defaultChecked />,
};

export const DisabledUnchecked: Story = {
  render: (args) => <ControlledCheckbox {...args} disabled />,
};

export const DisabledChecked: Story = {
  render: (args) => <ControlledCheckbox {...args} defaultChecked disabled />,
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
