import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import SeriesContainer from '../SeriesContainer'

describe('Series page', () => {
  test('render Series Page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <SeriesContainer />
      </Router>
    )

    expect(screen.getByText('Series').closest('a')).toHaveAttribute(
      'href',
      '/series'
    )
    expect(screen.getByText('Movies').closest('a')).toHaveAttribute(
      'href',
      '/movies'
    )

    expect(screen.getByText('7').closest('a')).toHaveAttribute(
      'href',
      '#'
    )

    expect(screen.getByText('Start your free trial')).toBeInTheDocument()
    expect(screen.getByText('Filter')).toBeInTheDocument()
    expect(screen.queryByText('Login')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular series/i }))
    expect(screen.getByRole('heading', { name: /Wolf creek/i }))
    expect(screen.getByRole('heading', { name: /Billions/i }))
  })
})
