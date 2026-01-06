import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-toolbars",
    "@storybook/addon-viewport",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  }
};
export default config;
