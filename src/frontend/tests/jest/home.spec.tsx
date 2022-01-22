import Home from 'frontend/page-components/Home'
import GlobalProvider from 'frontend/components/GlobalProvider'

import { expect } from '@jest/globals'
import { render } from '@testing-library/react'

describe('Home', () => {
  it('renders a heading', () => {
    const { getByTestId } = render(<Home />, { wrapper: GlobalProvider })

    expect(getByTestId('hello').textContent).toBe('Hello miguel')
  })
})
