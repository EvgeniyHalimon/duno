import {render, screen} from "@testing-library/react"
import { Title } from "./Title"
import { MemoryRouter as Router } from 'react-router-dom';

test('Govna', () => {
    render(
        <Router>
            <Title/>
        </Router>
    )
    expect(screen.getByRole('title')).toBeInTheDocument()
    expect(screen.getByRole('poster')).toBeInTheDocument()
    expect(screen.getByAltText(/-Poster/i)).toBeInTheDocument()
})