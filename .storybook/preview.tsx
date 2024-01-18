import React from 'react';

import type { Preview } from '@storybook/react';

import '../src/app/globals.css';
import { jetBrainsMono } from '../src/lib/fonts';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="storybook-decorator" className={jetBrainsMono.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
