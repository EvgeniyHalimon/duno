import {render, screen} from "@testing-library/react";

import { Error, ErrorSearch } from "./404";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Error component', () => {
    it('Error component render',() => {
        render(<Error/>) 
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('wrapper')).toHaveClass('error-wrapper')
        expect(screen.getByText('Page not found')).toBeInTheDocument()
    })
})