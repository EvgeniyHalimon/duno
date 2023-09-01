import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Head } from './Head';
import { store } from "../../store/store";

describe('Head component', () => {
    it('component renders', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Head/>
                </BrowserRouter>
            </Provider>
        )

        const head = screen.getByTestId("head")
        expect(head).toBeInTheDocument()

        const search = screen.getByTestId("search-input")
        expect(search).toBeInTheDocument()

        const switcher = screen.getByTestId("switcher")
        expect(switcher).toBeInTheDocument()        
    });
});
