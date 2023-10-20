import { it, expect, describe } from 'vitest'
import { HttpError, ValidationError } from './errors'

describe('check HttpError class', () => {
  it('should contain statusCode, message and data', () => {
    const statusCode = 201
    const message = 'succsess'
    const data = {
      key: 'test'
    }

    const expectedResult = new HttpError(statusCode, message, data)

    expect(expectedResult.statusCode).toBe(statusCode)
    expect(expectedResult.message).toBe(message)
    expect(expectedResult.data).toBe(data)
  })
})

describe('check ValidationError class', () => {
  it('should take message', () => {
    const message = 'test error message'

    const validationError = new ValidationError(message)

    expect(validationError).toHaveProperty('message')
  })
})
