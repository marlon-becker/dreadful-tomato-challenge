import paginateResults from '../paginateResults'

import * as stubs from './stubs'
import filterResults from '../filterResults'
import { fetchFromApi } from '../fetchFromApi'

describe('paginateResults', () => {
  const results = filterResults(fetchFromApi())('movie', stubs.defaultFilters)

  it('should return 10 results for the second page', () => {
    const paginatedResults = paginateResults(2, results)

    expect(paginatedResults.entries.length).toBe(10)
  })

  it('should return 6 results for last page', () => {
    const paginatedResults = paginateResults(4, results)

    expect(paginatedResults.entries.length).toBe(6)
  })

  it('should return 0 results for an non existing page', () => {
    const paginatedResults = paginateResults(5, results)

    expect(paginatedResults.entries.length).toBe(0)
  })

  it('should maintain the rest of object structure', () => {
    const paginatedResults = paginateResults(2, results)

    expect(paginatedResults.pages).toBe(results.pages)
    expect(paginatedResults.total).toBe(results.total)
  })
})
