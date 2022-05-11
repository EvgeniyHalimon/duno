import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Navigation } from "../../components/Navigation/Navigation";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchTitleGenres } from "../../store/actions/title-action-creators";
import { getFromStorage } from "../../utils/storage";
import { IGenreData } from "../../types/types";
import './Genres.scss'

export const Genres: React.FC = () => {
    const dispatch = useDispatch()
    const {titleGenres} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')
    
    const uniqueGenres = Array.from(new Set(titleGenres?.map((genre : IGenreData) => genre.mal_id)))
    .map((mal_id : any) => {
        return {
            mal_id : mal_id,
            name: titleGenres.find((genre: IGenreData) => genre.mal_id === mal_id)?.name as string,
            count: titleGenres.find((genre: IGenreData) => genre.mal_id === mal_id)?.count as number,
            url: titleGenres.find((genre: IGenreData) => genre.mal_id === mal_id)?.url as string,
        }
    })
    .sort((a: IGenreData, b: IGenreData) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        
        return 0
    })

    useEffect(() => {
        dispatch(fetchTitleGenres())
    },[topic])

    return(
        <div className="wrapper-genres">
            <Navigation/>
            <div>
                <ul className="genre-list">
                    {
                        uniqueGenres?.map((genre: IGenreData) => {
                            return( 
                                <li className='genre-name' key={genre.mal_id}>
                                        <Link to={`/genres/${genre.mal_id}`} className='genre-name-link'>
                                            <h3 className="heading">{genre.name}<sub>({genre.count})</sub></h3>
                                        </Link>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}