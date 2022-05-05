import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { Navigation } from "../../components/Navigation/Navigation";

import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchAnimeGenres, isAnimeFlag } from "../../store/actions/anime-action-creators";
import { fetchMangaGenres, isMangaFlag } from "../../store/actions/manga-action-creators";

import { IGenreData } from "../../types/types";

import { getFromStorage } from "../../utils/storage";

import './Genres.scss'

export const Genres: React.FC = () => {
    const dispatch = useDispatch()

    const {animeGenres} = useTypesSelector(state => state.anime)
    const {mangaGenres} = useTypesSelector(state => state.manga)
    
    const genres: any = getFromStorage('topic') === "anime" ? animeGenres : mangaGenres
    
    const uniqueGenres = Array.from(new Set(genres?.map((genre : IGenreData) => genre.mal_id)))
    .map((mal_id : any) => {
        return {
            mal_id : mal_id,
            name: genres?.find((genre: IGenreData) => genre.mal_id === mal_id).name,
            count: genres?.find((genre: IGenreData) => genre.mal_id === mal_id).count,
            url: genres.find((genre: IGenreData) => genre.mal_id === mal_id).url,
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
        if(getFromStorage('topic') === "anime"){
            dispatch(isAnimeFlag(true))
            dispatch(fetchAnimeGenres())
        } else if(getFromStorage('topic') === "manga"){
            dispatch(isMangaFlag(true))
            dispatch(fetchMangaGenres())
        }
    },[getFromStorage('topic')])

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