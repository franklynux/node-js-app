module.exports = {
    // The root directory that Jest should scan for tests and modules within
    rootDir: './src',
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // The test environment that will be used for testing
    testEnvironment: 'node',
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
  
    // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  
    // An array of file extensions your modules use
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'node',
    ],
  };
  