import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Head } from './Head';
import { store } from "../../store/store";

describe('Home page', () => {
    it('page renders', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Head/>
                </BrowserRouter>
            </Provider>
        )

        const head = screen.getByTestId("head")
        expect(head).toBeInTheDocument()

        const title = screen.getByTestId("title")
        expect(title).toBeInTheDocument()

        const slider = screen.getByTestId("slider")
        expect(slider).toBeInTheDocument()        
    });
});
