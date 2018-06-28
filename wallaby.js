module.exports = function wallabyConfig(wallaby) {
  return {
    files: ['@hd/**/*.ts'],
    tests: ['test/**/*.spec.ts'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    },
    preprocessors: {
      '**/*.vue': file => require('vue-jest').process(file.content, file.path),
    },
    setup: () => {
      require('browser-env')();
      const Vue = require('vue');
      Vue.config.productionTip = false;
    },
    env: { type: 'node', runner: 'node' },
  };
};
