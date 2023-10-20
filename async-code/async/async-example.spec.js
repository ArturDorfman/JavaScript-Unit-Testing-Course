import { describe, expect, it } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

describe('hanlde async code with help of callback fn', () => {
  it('should generate a token value', (done) => {
    const testUserEmail = 'test.test@gmail.com'
  
    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined()
        done()
      } catch (err) {
        done(err)
      }
    })
  })
})

describe('hanlde async code with help of promises/(asyncawait)', () => {
  it('should generate a token value', () => {
    const testUserEmail = 'test.test@gmail.com'
  
    const promiseToken = generateTokenPromise(testUserEmail)

    return expect(promiseToken).resolves.toBeDefined()
  })

  it('should generate a token value', async () => {
    const testUserEmail = 'test.test@gmail.com'
  
    const token = await generateTokenPromise(testUserEmail)

    expect(token).toBeDefined()
  })
})
