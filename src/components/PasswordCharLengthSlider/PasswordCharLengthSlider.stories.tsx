import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  PasswordCharLengthSlider,
  PasswordCharLengthSliderProps,
} from './PasswordCharLengthSlider';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof PasswordCharLengthSlider> = {
  component: PasswordCharLengthSlider,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof PasswordCharLengthSlider>;

type ControlledSliderProps = PasswordCharLengthSliderProps & { defaultValue?: number };

const ControlledSlider = ({ defaultValue = 0 }: ControlledSliderProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (newValue: number) => {
    setValue(newValue);
  };

  return <PasswordCharLengthSlider className="w-80" value={value} onChange={handleChangeValue} />;
};

export const Empty: Story = {
  render: (args) => <ControlledSlider {...args} />,
};

export const WithValue: Story = {
  args: { value: 10 },
  render: (args) => <ControlledSlider {...args} defaultValue={args.value} />,
};
