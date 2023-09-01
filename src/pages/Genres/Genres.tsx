import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchTitleGenres, setCleanUpGenres } from "../../store/actions/title-action-creators";
import { getFromStorage } from "../../utils/storage";
import { IGenreData } from "../../types/types";
import './Genres.scss'

export const Genres = () => {
    const dispatch = useDispatch()
    const { titleGenres, isTitle } = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    const uniqueGenres = titleGenres?.reduce((accumulator: Record<number, IGenreData>, genre: IGenreData) => {
        if (!accumulator[genre.mal_id]) {
            accumulator[genre.mal_id] = {
                mal_id: genre.mal_id,
                name: genre.name as string,
                count: genre.count as number,
                url: genre.url as string,
            };
        }
        return accumulator;
    }, {} as Record<number, IGenreData>);

    const sortedGenres = Object.values(uniqueGenres).sort((a: IGenreData, b: IGenreData) => {
        return a.name.localeCompare(b.name);
    });


    useEffect(() => {
        dispatch(fetchTitleGenres())
        return () => {
            dispatch(setCleanUpGenres())
        }
    }, [topic, isTitle])

    return (
        <div className="wrapper-genres">
            <ul className="genre-list">
                {
                    sortedGenres?.map((genre: IGenreData) => {
                        return (
                            <li className='genre-name' key={genre.mal_id}>
                                <Link to={`/genres/${genre.mal_id}`} className='genre-name-link' data-testid={`genre-link-${genre.mal_id}`}>
                                    <h3 className="heading" data-testid="genre-name">{genre.name}<sub>({genre.count})</sub></h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}