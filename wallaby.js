//tslint:disable
const wallabyWebpack = require('wallaby-webpack');
const wConfig = require('./mocha-webpack.config');

const webpackPostprocessor = wallabyWebpack({...wConfig});

module.exports = function (wallaby) {
    process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

    const vueCompiler = wallaby.compilers.babel({
        presets: ['@babel/preset-typescript'],
    });

    return {
        files: [
            { pattern: './@hd/**/*.ts' }
        ],

        tests: [
            { pattern: './test/**/*.spec.ts', load: false }
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['env']
            }),
            '**/*.ts?(x)': wallaby.compilers.typeScript({
                "experimentalDecorators": true,
                "emitDecoratorMetadata": true
            }),
            '**/*.vue': require('wallaby-vue-compiler')(vueCompiler),
        },
        testFramework: 'mocha',
        debug: true,

        postprocessor: webpackPostprocessor,

        // preprocessors: {
        //     '**/*.js': file => require('babel-core').transform(file.content, {sourceMap: true, filename: file.path}),
        // },

        files: ['tsconfig.json'],
        setup: function (wallaby) {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
// module.exports = function wallabyConfig(wallaby) {
//     process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
  
//     const compiler = 

//     return {
//       files: ['./@hd/**/*', 'package.json'],
//       tests: ['test/**/*.spec.ts'],
//       testFramework: 'mocha',
//     //   setup: () => {
//     //     require('browser-env')();
//     //     const Vue = require('vue');
//     //     Vue.config.productionTip = false;
//     //   },
//       compilers: {
//         '**/*.js': compiler,
//         '**/*.ts': compiler,
//         '**/*.vue': require('wallaby-vue-compiler')(compiler),
//       },
//       env: { type: 'node', runner: 'node' },
//       debug: true,
//     };
//   };