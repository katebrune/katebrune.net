module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@katebrune/ui$': '<rootDir>/../../packages/ui/src/index.ts',
    '^@katebrune/ui/badge$':
      '<rootDir>/../../packages/ui/src/components/ui/badge/badge.tsx',
    '^@katebrune/ui/button$':
      '<rootDir>/../../packages/ui/src/components/ui/button/button.tsx',
    '^@katebrune/ui/card$':
      '<rootDir>/../../packages/ui/src/components/ui/card/card.tsx',
    '^@katebrune/ui/scroll-area$':
      '<rootDir>/../../packages/ui/src/components/ui/scroll-area/scroll-area.tsx',
    '^@katebrune/ui/toggle$':
      '<rootDir>/../../packages/ui/src/components/ui/toggle/toggle.tsx',
    '^@katebrune/ui/typography$':
      '<rootDir>/../../packages/ui/src/components/ui/typography/typography.tsx',
    '^@katebrune/ui/utils$': '<rootDir>/../../packages/ui/src/lib/utils.ts',
    '@/app/(.*)': '<rootDir>/src/app/$1',
    '@/services/(.*)': '<rootDir>/src/services/$1',
    '@/styles/(.*)': '<rootDir>/styles/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleDirectories: ['node_modules', 'src'],
}
