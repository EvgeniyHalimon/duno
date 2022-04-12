import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { isAnimeFlag } from "../store/actions/anime-action-creators";
import { isMangaFlag } from "../store/actions/manga-action-creators";
import { IGenreData } from "../types/types";
import { fetchAnimeData, fetchMangaData } from "../utils/fetch";

export const Genres: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [genres, setGenres] = useState<any>([])

    const {isAnime} = useTypesSelector(state => state.anime)
    const {isManga} = useTypesSelector(state => state.manga)

    const getAnimeGenres = async () => {
        const fetchedGenres = await fetchAnimeData.fetchAnimeGenres()
        setGenres(fetchedGenres.data.data)
    }

    const getMangaGenres = async () => {
        const fetchedGenres = await fetchMangaData.fetchMangaGenres()
        setGenres(fetchedGenres.data.data)
    }

    const unique = Array.from(new Set(genres.map((genre : IGenreData) => genre.mal_id)))
    .map((mal_id : any) => {
        return {
            mal_id : mal_id,
            name: genres.find((genre: IGenreData) => genre.mal_id === mal_id).name,
            count: genres.find((genre: IGenreData) => genre.mal_id === mal_id).count,
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

    const topic = localStorage.getItem('topic')
    

    useEffect(() => {
        topic === "anime" ? dispatch(isAnimeFlag(true)) : "manga" ? dispatch(isMangaFlag(true)) : dispatch(isMangaFlag(false))
        topic === "anime" ? getAnimeGenres() : getMangaGenres()
    },[topic])

    return(
        <div>
            <button onClick={() => navigate('/')}>back</button>
            <ul className="genre-list">
                {
                    unique?.map((genre: IGenreData, index: number) => {
                        return( 
                                <Link to={`/genres/${genre.mal_id}`} key={index} className='genre-name'>
                                    <li>
                                        <h3 style={{margin: 0}}>{genre.name}<sub>({genre.count})</sub></h3>
                                    </li>
                                </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}