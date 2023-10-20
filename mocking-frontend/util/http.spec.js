import { it, expect, vi } from 'vitest'
import { sendDataRequest } from './http'
import { HttpError } from './errors'

const testResponceData = {
  testKey: 'testData'
}

const testFetch = vi.fn((url, config) => {
  return new Promise((resolve, reject) => {
    if (typeof config.body !== 'string') {
      return reject('Body does not converted to JSON')
    }

    const testResponce = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponceData)
        })
      }
    }

    resolve(testResponce)
  })
})

vi.stubGlobal('fetch', testFetch)

it('should return any available responce data', () => {
  const testData = {
    key: 'test'
  }

  const expectedPromise = sendDataRequest(testData)

  return expect(expectedPromise).resolves.toEqual(testResponceData)
})

it('should converthe provided data to JSON before sending the request', async () => {
  const testData = {
    key: 'test'
  }
  let errorMessage;

  try {
    await sendDataRequest(testData)
  } catch (error) {
    errorMessage = error
  }


  expect(errorMessage).not.toBe('Body does not converted to JSON')
})

it('should throw an HttpError in case of non-ok sponces', () => {
  testFetch.mockImplementationOnce((url, config) => {
    return new Promise((resolve, reject) => {
      const testResponce = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponceData)
          })
        }
      }
  
      resolve(testResponce)
    })
  })
  const testData = {
    key: 'test'
  }

  const expectedPromise = sendDataRequest(testData)

  return expect(expectedPromise).rejects.toBeInstanceOf(HttpError)
})
