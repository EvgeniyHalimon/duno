import {render, screen} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";

import { Navigation } from "./Navigation";

/* describe('Navigation', () => {
    it('Nav', () => {
        const history = createMemoryHistory()
        history.push('/home')
        render(
            <Router location={history.location} navigator={history}>
                <App/>
            </Router>
        )

        expect(screen.getByText(/home/i)).toBeInTheDocument()
    });
}); */
