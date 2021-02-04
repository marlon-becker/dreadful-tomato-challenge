import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import HomeContainer from '../HomeContainer'

describe('Home page', () => {
  test('render Home Page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <HomeContainer />
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

    expect(screen.getByText('Start your free trial')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.queryByText('Filters')).not.toBeInTheDocument()
  })
})
