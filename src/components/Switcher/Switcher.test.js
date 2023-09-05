import { render, screen, fireEvent } from "@testing-library/react";
import { Switcher } from "./Switcher";
import { useDispatch } from "react-redux";
import { isTitleFlag } from "../../store/actions/title-action-creators";
import { setToStorage } from "../../utils/storage";

jest.mock("react-redux");
jest.mock("../../utils/storage");

describe("Switcher component", () => {
    it("renders buttons for anime and manga", () => {
        render(<Switcher />);
        const animeButton = screen.getByText("Anime");
        const mangaButton = screen.getByText("Manga");
        expect(animeButton).toBeInTheDocument();
        expect(mangaButton).toBeInTheDocument();
    });

    it("calls setToStorage and dispatch when Anime button is clicked", () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        render(<Switcher />);


        fireEvent.click(screen.getByText((content, element) => {
            return element.textContent === "Anime" && element.tagName.toLowerCase() === "p";
        }));

        expect(setToStorage).toHaveBeenCalledWith("topic", "anime");
        expect(dispatch).toHaveBeenCalledWith(isTitleFlag("anime"));
    });

    it("calls setToStorage and dispatch when Manga button is clicked", () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        render(<Switcher />);
        const mangaButton = screen.getByText("Manga");

        fireEvent.click(mangaButton);

        expect(setToStorage).toHaveBeenCalledWith("topic", "manga");
        expect(dispatch).toHaveBeenCalledWith(isTitleFlag("manga"));
    });
});
