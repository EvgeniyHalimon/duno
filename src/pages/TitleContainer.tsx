import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeData } from "../utils/fetch";
import { Title } from "../components/Title";

export const TitleContainer: React.FC = () => {

    const {id} = useParams()
    const [title, setTitle] = useState([])

    const fetchData = async (id:  string | undefined) => {
        const data = await fetchAnimeData.fetchCurrentAnimeTitle(id)
        console.log(data);
        console.log(id);
        setTitle(data.data.data)
    }

    useEffect(() => {
        fetchData(id)
    },[id])

    return(
        <Title title={title}/>
    )
}