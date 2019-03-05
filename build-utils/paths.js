const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  src: resolveApp('src'),
  dist: resolveApp('dist'),
  debug: resolveApp('debug'),
};

paths.resolveModules = [
  paths.src,
  'node_modules',
];

module.exports = paths;
