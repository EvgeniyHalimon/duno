import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAnimeData } from "../utils/fetch";

export const Genres: React.FC = () => {

    const [genres, setGenres] = useState<any>([])

    const getData = async () => {
        const fetchedGenres = await fetchAnimeData.fetchAnimeGenres()
        setGenres(fetchedGenres.data.data)
    }

    console.log(genres)

    useEffect(() => {
        getData()
    },[])

    return(
        <ul>
            {
                genres?.map((genre:any, index: number) => {
                    return( 
                            <Link to={`/genres/${genre.mal_id}`} key={index}>
                                <li>
                                    {genre.name}
                                </li>
                            </Link>
                    )
                })
            }
        </ul>
    )
}