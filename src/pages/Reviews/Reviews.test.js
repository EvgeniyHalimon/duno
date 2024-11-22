import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Reviews } from "./Reviews";
import { dispatch, useTypedSelector } from "../../hooks";
import {
    fetchCurrentTitle,
    fetchTitleReviews,
} from "../../store/actions/title-action-creators";

jest.mock("react-redux");
jest.mock("../../hooks/useTypedSelector");
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
        dispatch.mockReturnValue(jest.fn());
        useTypedSelector.mockReturnValue({
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
        useTypedSelector.mockReturnValue({ titleReviews: [], currentTitle: mockTitle });

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

        expect(dispatch()).toHaveBeenCalledWith(fetchTitleReviews(1));
        expect(dispatch()).toHaveBeenCalledWith(fetchCurrentTitle(1));
    });
});
