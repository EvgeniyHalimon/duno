import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../../components/PaginatedTitles/PaginatedTitles";
import { Loading } from "../../components/Loading/Loading";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchTitleSearch } from "../../store/actions/title-action-creators";

export const SearchResult = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const {titleSearchResult, lastTitlePage} = useTypesSelector(state => state.title)

    const searchTerm = searchParams.get('search')

    useEffect(() => {
        dispatch(fetchTitleSearch(searchTerm, currentPage))
    },[currentPage])

    return(
        titleSearchResult ?
        <div className="wrapper-genre">
            <PaginatedTitles paginatedTitles={titleSearchResult}/>
            <Pagination 
                count={lastTitlePage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </div> : <Loading/>
    )
}