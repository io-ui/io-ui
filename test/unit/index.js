// require all test files (files that ends with .specs.js)
const testsContext = require.context('./specs', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../packages', true, /\.vue$/);
srcContext.keys().forEach(srcContext);
