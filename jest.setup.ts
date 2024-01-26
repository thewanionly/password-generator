import { setProjectAnnotations } from '@storybook/react';
import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

import globalStorybookConfig from './.storybook/preview';

// Integrate storybook into testing
// Source: https://storybook.js.org/docs/writing-tests/stories-in-unit-tests
setProjectAnnotations(globalStorybookConfig);

// Mock ResizeObserver
global.ResizeObserver = ResizeObserver;
