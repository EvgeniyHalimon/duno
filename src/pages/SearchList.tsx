import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Pagination } from "@mui/material";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";
import { Loading } from "../components/Loading";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchTitleSearch } from "../store/actions/title-action-creators";


export const SearchResultList = () => {
    const navigate = useNavigate()
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
            <Button className="back-button" onClick={() => navigate('/')}>
                <p className="back-button">Back to main page </p>
            </Button>
            <PaginatedTitles paginatedTitles={titleSearchResult}/>
            <Pagination 
                count={lastTitlePage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </div> : <Loading/>
    )
}