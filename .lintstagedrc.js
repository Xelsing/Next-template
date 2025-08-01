const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --fix ')}`;
const prettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;
const stylelintCommand = (filenames) =>
  `stylelint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{js,jsx}': [buildEslintCommand, prettierCommand],
  '*.{css,scss}': [stylelintCommand],
};
