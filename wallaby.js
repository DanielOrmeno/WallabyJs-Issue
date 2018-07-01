// tslint:disable
module.exports = function wallabyConfig(wallaby) {
  const compiler = wallaby.compilers.babel({
    plugins: [
      ['@babel/proposal-decorators', {legacy: true}],
      '@babel/proposal-class-properties'
    ],
    presets: ['@zeit/next-typescript/babel']
  });
  return {
    files: [
      '@hd/**/*.ts',
      'components/**/**.vue',
      'tsconfig.json'
    ],
    tests: ['test/**/*.spec.ts'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      }),
      '**/*.vue': require('wallaby-vue-compiler')(compiler),
    },
    preprocessors: {
      '**/*.vue': file => require('vue-jest').process(file.content, file.path),
    },
    setup: () => {
      require('browser-env')();
      require('reflect-metadata');
      const Vue = require('vue');
      Vue.config.productionTip = false;

      if (global._tsconfigPathsRegistered) {
        return;
      }
      const tsConfigPaths = require('tsconfig-paths');
      const tsconfig = require('./tsconfig.json');
      tsConfigPaths.register({
        baseUrl: tsconfig.compilerOptions.baseUrl,
        paths: tsconfig.compilerOptions.paths
      });
      global._tsconfigPathsRegistered = true;
    },
    env: { type: 'node', runner: 'node' },
  };
};
