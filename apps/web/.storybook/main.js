module.exports = {
  stories: [
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../../../packages/ui/src/**/*.stories.(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
