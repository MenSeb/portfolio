/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.ts',
    '<rootDir>/packages/**/src/**/*.tsx',
    '!<rootDir>/packages/**/src/**/index.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov', 'html'],
  preset: 'ts-jest',
  rootDir: './',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '^(.(?!\\.test\\.))*$'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: true,
};
