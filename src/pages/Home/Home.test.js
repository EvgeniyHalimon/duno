import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Home } from './Home.tsx';
import { store } from "../../store/store";

describe('Home page', () => {
    it('page renders', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        )

        const head = screen.getByTestId("head")
        expect(head).toBeInTheDocument()

        const titles = screen.getByTestId("paginated-titles")
        expect(titles).toBeInTheDocument()

        const slider = screen.getByTestId("skeleton-card")
        expect(slider).toBeInTheDocument()
    });
});
