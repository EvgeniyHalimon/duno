import { useState, useEffect } from "react";
import {  useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../../components/PaginatedTitles/PaginatedTitles";
import { Loading } from "../../components/Loading/Loading";
import { useAppDispatch, useTypedSelector } from "../../hooks";
import { fetchTitleSearch } from "../../store/actions/title-action-creators";

export const SearchResult = () => {
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const {titleSearchResult, lastTitlePage} = useTypedSelector(state => state.title)

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