import { it, expect, describe, vi } from 'vitest'
import { generateReportData } from './data'

describe('check generateReportData function', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn()
    
    generateReportData(logger)

    expect(logger).toBeCalled()
  })
})