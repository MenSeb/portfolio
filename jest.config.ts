/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['^(.(?!\\.test\\.))*$'],
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  verbose: true,
};
