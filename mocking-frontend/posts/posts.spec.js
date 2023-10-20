import { it, expect, describe } from 'vitest'
import { extractPostData } from './posts'

describe('should check extractPostData func', () => {
  it('should extract title and content from the provided data', () => {
    const testTilte = 'test title'
    const testContent = 'test content'

    const testFormData = {
      title: testTilte,
      content: testContent,
      get(identifier) {
        return this[identifier]
      }
    }

    const data = extractPostData(testFormData)

    expect(data).toEqual({ title: testTilte, content: testContent })
  })
})
