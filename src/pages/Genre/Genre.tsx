import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../../components/PaginatedTitles/PaginatedTitles";
import { fetchPaginatedTitlesByGenre } from "../../store/actions/title-action-creators";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { getFromStorage } from "../../utils/storage";


export const Genre = () => {
    const dispatch = useDispatch()
    const {name} = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    const {titleByGenre, lastTitlePage} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchPaginatedTitlesByGenre(name, currentPage))
    },[topic, currentPage])

    return(
        <div className="wrapper-genre">
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