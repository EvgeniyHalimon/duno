import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation component', () => {
  it('renders navigation links correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('HOME');
    const popularLink = screen.getByText('POPULAR');
    const genresLink = screen.getByText('GENRES');

    expect(homeLink).toBeInTheDocument();
    expect(popularLink).toBeInTheDocument();
    expect(genresLink).toBeInTheDocument();
  });

  it('navigates to the correct paths', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('HOME');
    const popularLink = screen.getByText('POPULAR');
    const genresLink = screen.getByText('GENRES');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(popularLink).toHaveAttribute('href', '/popular');
    expect(genresLink).toHaveAttribute('href', '/genres');
  });

  it('navigates to the home page when HOME link is clicked', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('HOME');
    fireEvent.click(homeLink);

    const pathname = window.location.pathname;
    expect(pathname).toBe('/');
  });

  it('navigates to the popular page when POPULAR link is clicked', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const popularLink = screen.getByText('POPULAR');
    fireEvent.click(popularLink);

    const pathname = window.location.pathname;
    expect(pathname).toBe('/popular');
  });

  it('navigates to the genres page when GENRES link is clicked', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const genresLink = screen.getByText('GENRES');
    fireEvent.click(genresLink);

    const pathname = window.location.pathname;
    expect(pathname).toBe('/genres');
  });
});
