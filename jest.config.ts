/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(config)();

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Set up this way to fix svgr issue in Jest. Source: https://github.com/vercel/next.js/discussions/42535#discussion-4542627
      '\\.svg$': '<rootDir>/src/tests/__mocks__/svg.ts',
      // Handle absolute paths
      '^@/(.*)$': '<rootDir>/src/$1',
      // You have to specify the complete path to preview.tsx for it ot be taken into account as a module
      // Source: https://github.com/vercel/next.js/issues/47866#issuecomment-1607426842
      '\\.storybook/preview': '<rootDir>/.storybook/preview.tsx',
      // Ensure all other config for moduleNameMapper provided by createJestConfig by default are still included
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

export default jestConfig;
