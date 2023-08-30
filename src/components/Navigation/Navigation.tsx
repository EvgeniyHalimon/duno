import { NavLink } from 'react-router-dom';

import './Navigation.scss'

export const Navigation = () => {

    return (
        <nav className="navigation">
            <p>
                <NavLink
                    to='/'
                    className="navigation-link"
                >
                    HOME</NavLink>
            </p>
            <p>
                <NavLink
                    to={'/popular'}
                    className="navigation-link"
                >
                    POPULAR</NavLink>
            </p>
            <p>
                <NavLink
                    to='/genres'
                    className="navigation-link"
                >
                    GENRES</NavLink>
            </p>
        </nav>
    )
}