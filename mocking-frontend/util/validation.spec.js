import { it, expect } from 'vitest'
import { validateNotEmpty } from './validation'

it('should throw an error if empty message provided', () => {
  const message = ''
  const errorMessage = 'You provided empty text'

  const expectedResult = () => validateNotEmpty(message, errorMessage)

  expect(expectedResult).toThrowError(/You provided empty text/)
})

it('should throw an error if message with whitespaces is provided', () => {
  const message = '  '
  const errorMessage = 'You provided empty text'

  const expectedResult = () => validateNotEmpty(message, errorMessage)

  expect(expectedResult).toThrowError(/You provided empty text/)
})

it('should throw an error if message is not provided', () => {
  const expectedResult = () => validateNotEmpty()

  expect(expectedResult).toThrow()
})

it('should validate not empty text', () => {
  const message = 'test message'

  const expectedResult = validateNotEmpty(message)

  expect(expectedResult).toBeUndefined()
})
