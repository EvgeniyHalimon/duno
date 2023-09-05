import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Genres } from "./Genres";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchTitleGenres, setCleanUpGenres } from "../../store/actions/title-action-creators";

jest.mock("react-redux");
jest.mock("../../hooks/useTypesSelector");
jest.mock("../../store/actions/title-action-creators");

describe("Genres component", () => {
  const mockGenres = [
    { mal_id: 1, name: "Action", count: 10, url: "/genres/1" },
    { mal_id: 2, name: "Adventure", count: 5, url: "/genres/2" },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useTypesSelector.mockReturnValue({ titleGenres: mockGenres, isTitle: false });
  });

  it("renders a list of genres", () => {
    render(
      <MemoryRouter>
        <Genres />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId("genre-name")).toHaveLength(mockGenres.length);

    const genreNames = screen.getAllByTestId("genre-name");

    expect(genreNames).toHaveLength(mockGenres.length);

    mockGenres.forEach((genre, index) => {
      const genreName = genreNames[index];

      const regex = new RegExp(`${genre.name}.*\\(${genre.count}\\)`);
      expect(genreName).toHaveTextContent(regex);

      const genreLink = screen.getByTestId(`genre-link-${genre.mal_id}`);
      expect(genreLink).toHaveAttribute("href", genre.url);
    });
  });
  it("dispatches fetchTitleGenres on component mount", () => {
    render(
      <MemoryRouter>
        <Genres />
      </MemoryRouter>
    );

    expect(useDispatch()).toHaveBeenCalledWith(fetchTitleGenres());
  });

  it("dispatches setCleanUpGenres on component unmount", () => {
    const { unmount } = render(
      <MemoryRouter>
        <Genres />
      </MemoryRouter>
    );

    unmount();

    expect(useDispatch()).toHaveBeenCalledWith(setCleanUpGenres());
  });
});
