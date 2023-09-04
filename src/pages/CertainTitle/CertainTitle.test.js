import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CertainTitle } from './CertainTitle';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { fetchCurrentTitle } from '../../store/actions/title-action-creators';

jest.mock('react-redux');
jest.mock('../../hooks/useTypesSelector');
jest.mock('../../store/actions/title-action-creators');

describe('CertainTitle component', () => {
  const mockTitle = {
    mal_id: 1,
    title: "Example Title",
    title_japanese: "Japanese Title",
    rating: "PG-13",
    type: "TV",
    aired: { string: "Jan 2022" },
    published: { string: "2022" },
    rank: 1,
    status: "Airing",
    score: 8.5,
    scored_by: 1000,
    genres: [{ mal_id: 1, name: "Action" }, { mal_id: 2, name: "Adventure" }],
    synopsis: "Synopsis of the title",
    duration: "24 min per ep",
    episodes: 12,
    images: {
      webp: { large_image_url: "example-image-url" },
    },
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders CertainTitle when CurrentTitle is available', () => {
    useTypesSelector.mockReturnValue({ currentTitle: mockTitle });
    render(
      <MemoryRouter initialEntries={['/title/1']}>
        <Routes>
          <Route path="/title/:id" element={<CertainTitle />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Example Title / Japanese Title')).toBeInTheDocument();
  });

  it('renders Loading when CertainTitle is not available', () => {
    useTypesSelector.mockReturnValue({ currentTitle: null });
    render(
      <MemoryRouter initialEntries={['/title/1']}>
        <Routes>
          <Route path="/title/:id" element={<CertainTitle />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading-gif')).toBeInTheDocument();
  });

  it('dispatches fetchCurrentTitle with the correct id on component mount', () => {
    const id = '1';
    useTypesSelector.mockReturnValue({ currentTitle: null });
    render(
      <MemoryRouter initialEntries={['/title/1']}>
        <Routes>
          <Route path="/title/:id" element={<CertainTitle />} />
        </Routes>
      </MemoryRouter>
    );

    expect(useDispatch()).toHaveBeenCalledWith(fetchCurrentTitle(id));
  });
});
