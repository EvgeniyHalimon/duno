import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchAnimeGenres, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchMangaGenres, isMangaFlag } from "../store/actions/manga-action-creators";
import { IGenreData } from "../types/types";
import { Button } from "@mui/material";

export const Genres: React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const topic: string | null = localStorage.getItem('topic')

    const {animeGenres} = useTypesSelector(state => state.anime)
    const {mangaGenres} = useTypesSelector(state => state.manga)
    
    const genres: any = topic === "anime" ? animeGenres : mangaGenres
    
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
        topic === "anime" ? dispatch(isAnimeFlag(true)) : "manga" ? dispatch(isMangaFlag(true)) : dispatch(isMangaFlag(false))
        topic === "anime" ? dispatch(fetchAnimeGenres()) : dispatch(fetchMangaGenres())
    },[topic])

    return(
        <div>
            <Button onClick={() => navigate('/')}>Back to main page</Button>
            <ul className="genre-list">
                {
                    uniqueGenres?.map((genre: IGenreData, index: number) => {
                        return( 
                                <Link to={`/genres/${genre.mal_id}`} key={genre.mal_id} className='genre-name'>
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