import filterResults from '../filterResults'
import { fetchFromApi } from '../fetchFromApi'

import * as stubs from './stubs'

// In real test I would mock the api response to get a fake one, in this case as is already
// imported from fake data I don't think is necessary
describe('filterResults', () => {
  const results = fetchFromApi()

  it('should filter results by program type movies', () => {
    const filteredResults = filterResults(results)(
      'movie',
      stubs.defaultFilters
    )
    expect(filteredResults.entries.length).toBe(36)
    expect(filteredResults.pages).toBe(4)
  })

  it('should filter results by program type series', () => {
    const filteredResults = filterResults(results)(
      'series',
      stubs.defaultFilters
    )
    expect(filteredResults.entries.length).toBe(64)
    expect(filteredResults.pages).toBe(7)
  })

  it('should filter results by program type series and with query search', () => {
    const filteredResults = filterResults(results)('series', stubs.queryFilters)

    expect(filteredResults.entries.length).toBe(1)
    expect(filteredResults.pages).toBe(1)
  })

  it('should filter results by program type series and with release year search', () => {
    const filteredResults = filterResults(results)('series', stubs.yearFilters)

    expect(filteredResults.entries.length).toBe(13)
    expect(filteredResults.pages).toBe(2)
  })
})
