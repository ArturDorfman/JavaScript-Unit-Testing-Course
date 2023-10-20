import { it, expect, vi } from 'vitest'
import writeData from './io'
import { promises as fs } from 'fs'

vi.mock('fs')
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => args[args.length - 1]
    }
  }
})

it('should exeute the writeFile method', () => {
  const data = 'testData'
  const filename = 'testFilename'

  writeData(data, filename)

  expect(fs.writeFile).toBeCalledWith(filename, data)
})