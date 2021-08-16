module.exports = {
  // 别名设置
  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/$1',
    '^/@components/(.*)$': '<rootDir>/src/components/$1',
    '^/@views/(.*)$': '<rootDir>/src/views/$1',
  },
  moduleFileExtensions: [
    'js',
    'json',
    // 告诉 Jest 处理 ·*.vue 文件
    'vue',
  ],
  transform: {
    // 用vue-jest处理'*.vue'文件
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
  },
  // 测试覆盖率
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{js, vue, ts, tsx}', '!**/node_modules/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};
