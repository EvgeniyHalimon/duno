import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe('Layout component', () => {
    it('Layout renders', () => {
        const mockState = [];
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Layout></Layout>
                </MemoryRouter>
            </Provider>,
            { initialState: mockState }
        );

        const layout = screen.getByTestId('layout');
        expect(layout).toBeInTheDocument();
    });
});
