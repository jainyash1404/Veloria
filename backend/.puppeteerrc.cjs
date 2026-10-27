const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Yeh exact path puppeteer ko Render par browser dhoondhne par majboor karega
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
