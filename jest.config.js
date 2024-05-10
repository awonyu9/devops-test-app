module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^../resources.json$': '<rootDir>/__mocks__/resources.json',
  },
  testEnvironment: 'jsdom',
};
