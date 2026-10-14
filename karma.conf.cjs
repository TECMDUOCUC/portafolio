const path = require('path');

process.env.CHROME_BIN =
  process.env.CHROME_BIN ||
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' ||
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/**/*.spec.js', watched: false }
    ],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-esbuild',
      'karma-coverage',
      'karma-mocha-reporter' // 1. Added plugin
    ],

    preprocessors: {
      'src/**/*.spec.js': ['esbuild'],
      'src/**/*.spec.jsx': ['esbuild']
    },

    esbuild: {
      absWorkingDir: __dirname,
      target: 'es2022',
      format: 'iife',
      bundle: true,
      jsx: 'automatic',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      },
      define: {
        'process.env.NODE_ENV': '"test"'
      }
    },

    // 2. Swapped 'progress' for 'mocha'
    reporters: ['mocha', 'coverage'],

    // 3. Optional configuration for karma-mocha-reporter
    mochaReporter: {
      output: 'full',             // Shows all specs ('full', 'autofold', 'minimal', 'noFailures')
      showDiff: true,             // Highlights string/object differences on failure
      ignoreSkipped: false        // Shows skipped or pending tests
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    browsers: ['EdgeChromiumHeadless'],
    customLaunchers: {
      EdgeChromiumHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-software-rasterizer'
        ]
      }
    },

    singleRun: true,
    concurrency: Infinity
  });
};