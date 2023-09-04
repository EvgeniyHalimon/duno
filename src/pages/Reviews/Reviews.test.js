import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Reviews } from "./Reviews";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import {
    fetchCurrentTitle,
    fetchTitleReviews,
} from "../../store/actions/title-action-creators";

jest.mock("react-redux");
jest.mock("../../hooks/useTypesSelector");
jest.mock("../../store/actions/title-action-creators");

describe("Reviews component", () => {
    const mockReviews = [
        {
            mal_id: 1,
            user: { username: "user1", images: { webp: { image_url: "image1" } } },
            review: "Review 1",
            score: 5,
        },
        {
            mal_id: 2,
            user: { username: "user2", images: { webp: { image_url: "image2" } } },
            review: "Review 2",
            score: 4,
        },
    ];

    const mockTitle = {
        title: "Test Title",
    };

    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
        useTypesSelector.mockReturnValue({
            titleReviews: mockReviews,
            currentTitle: mockTitle,
        });
    });

    it("renders reviews", () => {
        render(
            <MemoryRouter initialEntries={["/reviews/1"]}>
                <Routes>
                <Route path='/reviews/:id' element={<Reviews />} />
                </Routes>
            </MemoryRouter>
        );

        mockReviews.forEach((review) => {
            expect(screen.getByText(review.review)).toBeInTheDocument();
            expect(screen.getByText(`Score: ${review.score}`)).toBeInTheDocument();
        });

        expect(screen.getByText(`Review's on ${mockTitle.title}`)).toBeInTheDocument();
    });

    it("renders 'No reviews yet' message", () => {
        useTypesSelector.mockReturnValue({ titleReviews: [], currentTitle: mockTitle });

        render(
            <MemoryRouter initialEntries={["/reviews/1"]}>
                <Routes>
                <Route path='/reviews/:id' element={<Reviews />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("No review's yet")).toBeInTheDocument();
    });

    it("dispatches fetchTitleReviews and fetchCurrentTitle on component mount", () => {
        render(
            <MemoryRouter initialEntries={["/reviews/1"]}>
                <Routes>
                <Route path='/reviews/:id' element={<Reviews />} />
                </Routes>
            </MemoryRouter>
        );

        expect(useDispatch()).toHaveBeenCalledWith(fetchTitleReviews(1));
        expect(useDispatch()).toHaveBeenCalledWith(fetchCurrentTitle(1));
    });
});
