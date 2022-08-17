module.exports = {
  stories: [
    "../src/cards.stories.js",
  ],
  addons: [
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/html",
  staticDirs: ['../src/icons'],
};