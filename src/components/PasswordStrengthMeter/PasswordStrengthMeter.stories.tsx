import type { Meta, StoryObj } from '@storybook/react';

import { PasswordStrengthMeter } from './PasswordStrengthMeter';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof PasswordStrengthMeter> = {
  component: PasswordStrengthMeter,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof PasswordStrengthMeter>;

export const Empty: Story = {
  args: {
    className: 'w-[343px]',
    password: '',
  },
};

export const TooWeak: Story = {
  args: {
    className: 'w-[343px]',
    password: 'aaaaaaaa',
  },
};

export const Weak: Story = {
  args: {
    className: 'w-[343px]',
    password: 'cRIqlZwirx',
  },
};

export const Medium: Story = {
  args: {
    className: 'w-[343px]',
    password: 'fpjEtCW5Ls5E',
  },
};

export const Strong: Story = {
  args: {
    className: 'w-[343px]',
    password: 'up&AEG}Lx3[Vn2;Mo&v',
  },
};
