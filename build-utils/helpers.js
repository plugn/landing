
const path = require('path');

/**
 * @param {string} folderPath - folder's path
 * @return {string}
 */
exports.setupPath = folderPath => path.resolve(__dirname, `${folderPath}`);

exports.PORT = process.env.PORT || 3000;
