/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import { RandomTitlesContainer } from "./RandomTitlesContainer";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchRandomTitle, isTitleFlag } from "../../store/actions/title-action-creators";
import { getFromStorage } from "../../utils/storage";
import { BrowserRouter } from 'react-router-dom';

jest.mock("react-redux");
jest.mock("../../hooks/useTypesSelector");
jest.mock("../../store/actions/title-action-creators");
jest.mock("../../utils/storage");

describe("RandomTitlesContainer", () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
        useDispatch.mockClear();
        useTypesSelector.mockClear();
        fetchRandomTitle.mockClear();
        isTitleFlag.mockClear();
        getFromStorage.mockClear();
    });

    test("renders with random titles", async () => {
        useTypesSelector.mockReturnValue({
            randomTitles: [
                {
                    mal_id: 1,
                    title: 'Mock Title 1',
                    title_japanese: 'モックタイトル',
                    images: {
                        webp: { image_url: 'mock-image-url' },
                    },
                    aired: { string: 'Jan 2023' },
                    type: 'TV',
                    genres: [{ mal_id: 1, name: 'Genre 1' }, { mal_id: 2, name: 'Genre 2' }],
                    score: 8.0,
                    rank: 1,
                    synopsis: 'Mock synopsis for testing purposes.',
                },
                {
                    mal_id: 1,
                    title: 'Mock Title 2',
                    title_japanese: 'モックタイトル',
                    images: {
                        webp: { image_url: 'mock-image-url' },
                    },
                    aired: { string: 'Jan 2023' },
                    type: 'TV',
                    genres: [{ mal_id: 1, name: 'Genre 1' }, { mal_id: 2, name: 'Genre 2' }],
                    score: 8.0,
                    rank: 1,
                    synopsis: 'Mock synopsis for testing purposes.',
                }
            ],
            isTitle: true,
        });

        render(
            <BrowserRouter>
                <RandomTitlesContainer />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(screen.getByText("Mock Title 1 / モックタイトル")).toBeInTheDocument();
            expect(screen.getByText("Mock Title 2 / モックタイトル")).toBeInTheDocument();
        });

        expect(fetchRandomTitle).toHaveBeenCalledTimes(1);
    });

    test("renders with skeleton cards when no random titles", async () => {
        useTypesSelector.mockReturnValue({
            randomTitles: null,
            isTitle: true,
        });

        render(
            <BrowserRouter>
                <RandomTitlesContainer />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(screen.getAllByTestId("skeleton-card")).toHaveLength(3);
        });

        expect(fetchRandomTitle).toHaveBeenCalledTimes(1);
    });

    test("dispatches correct actions based on storage value", async () => {
        getFromStorage.mockReturnValue("anime");

        useTypesSelector.mockReturnValue({
            randomTitles: [
                {
                    mal_id: 1,
                    title: 'Mock Title 1',
                    title_japanese: 'モックタイトル',
                    images: {
                        webp: { image_url: 'mock-image-url' },
                    },
                    aired: { string: 'Jan 2023' },
                    type: 'TV',
                    genres: [{ mal_id: 1, name: 'Genre 1' }, { mal_id: 2, name: 'Genre 2' }],
                    score: 8.0,
                    rank: 1,
                    synopsis: 'Mock synopsis for testing purposes.',
                },
                {
                    mal_id: 1,
                    title: 'Mock Title 2',
                    title_japanese: 'モックタイトル',
                    images: {
                        webp: { image_url: 'mock-image-url' },
                    },
                    aired: { string: 'Jan 2023' },
                    type: 'TV',
                    genres: [{ mal_id: 1, name: 'Genre 1' }, { mal_id: 2, name: 'Genre 2' }],
                    score: 8.0,
                    rank: 1,
                    synopsis: 'Mock synopsis for testing purposes.',
                }
            ],
            isTitle: true,
        });

        render(
            <BrowserRouter>
                <RandomTitlesContainer />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(isTitleFlag).toHaveBeenCalledWith("anime");
            expect(fetchRandomTitle).toHaveBeenCalledTimes(1);
        });
    });
});
