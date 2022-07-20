import {Link, Route, Routes, useLocation} from 'react-router-dom'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { Navigation } from './Navigation'

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

export const App = () => (
  <div>
    <Navigation/>

    <LocationDisplay />
  </div>
)



test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})

  fireEvent.click(screen.getByText("POPULAR"))
  expect(screen.getByTestId('location-display')).toHaveTextContent('/popular');
})

test('Create snap', () => {
    const govna = render(<BrowserRouter><App /></BrowserRouter>)
    expect(govna.asFragment()).toMatchSnapshot()
})
