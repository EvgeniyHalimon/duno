import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PaginatedTitles } from "../components/PaginatedTitles";
import { fetchAnimeData } from "../utils/fetch";

export const Genre: React.FC = () => {
    const {name} = useParams()

    const [genres, setGenres] = useState<any>([])

    const getData = async () => {
        const fetchedGenres = await fetchAnimeData.fetchAnimesByGenres(name, 1)
        setGenres(fetchedGenres.data.data)
    }

    useEffect(() => {
        getData()
    },[])

    console.log(name)
    console.log(genres)
    return(
        <PaginatedTitles paginatedTitles={genres}/>
    )
}