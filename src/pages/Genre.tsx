import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination, Button } from "@mui/material";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";
import { fetchPaginatedTitlesByGenre } from "../store/actions/title-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";


export const Genre = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {name} = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    const {titleByGenre, lastTitlePage} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchPaginatedTitlesByGenre(name, currentPage))
    },[topic, currentPage])

    return(
        <div className="wrapper-genre">
            <Button onClick={() => navigate('/genres')}>
                <p className="back-button">Back to genres</p>
            </Button>
            <div>
                <PaginatedTitles paginatedTitles={titleByGenre}/>
                <Pagination 
                    count={lastTitlePage} 
                    color="primary"
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </div>
    )
}