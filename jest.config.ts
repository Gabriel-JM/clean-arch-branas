import { Config } from '@jest/types'

export default <Config.InitialProjectOptions> {
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory:  'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
