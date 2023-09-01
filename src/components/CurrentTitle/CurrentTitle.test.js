import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CurrentTitle } from "./CurrentTitle";
import { fetchTitleReviews } from "../../store/actions/title-action-creators";
import { useTypesSelector } from "../../hooks/useTypesSelector";

jest.mock("react-redux");
jest.mock("../../hooks/useTypesSelector");
jest.mock("../../store/actions/title-action-creators");

describe("CurrentTitle component", () => {
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

  const mockTitleReviews = [{ id: 1, text: "Review 1" }, { id: 2, text: "Review 2" }];

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useTypesSelector.mockReturnValue({ titleReviews: mockTitleReviews });
  });

  it("renders title information", () => {
    render(
      <MemoryRouter>
        <CurrentTitle title={mockTitle} />
      </MemoryRouter>
    );

    expect(screen.getByText("Example Title / Japanese Title")).toBeInTheDocument();
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("Jan 2022")).toBeInTheDocument();
    expect(screen.getByText("Status: Airing")).toBeInTheDocument();
    expect(screen.getByText("Scored by: 1000 users")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Adventure")).toBeInTheDocument();
    expect(screen.getByText("Synopsis of the title")).toBeInTheDocument();
  });

  it("dispatches fetchTitleReviews on component mount", () => {
    render(
      <MemoryRouter>
        <CurrentTitle title={mockTitle} />
      </MemoryRouter>
    );

    expect(useDispatch()).toHaveBeenCalledWith(fetchTitleReviews(1));
  });

  it("displays correct number of reviews in the link", () => {
    render(
      <MemoryRouter>
        <CurrentTitle title={mockTitle} />
      </MemoryRouter>
    );

    expect(screen.getByText("See reviews (2)")).toBeInTheDocument();
  });
});
