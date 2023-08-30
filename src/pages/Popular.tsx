import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";
import { Navigation } from "../components/Navigation/Navigation";
import { Loading } from "../components/Loading";
import { fetchPopularTitle } from "../store/actions/title-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";

export const Popular = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {popularTitle, lastTitlePage, isTitle} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchPopularTitle(currentPage))
    },[topic, currentPage, isTitle])

    return(
        popularTitle.length !== 0 ?
        <div className="wrapper">
            <Navigation/>
            <div className="wrapper-popular">
                <PaginatedTitles paginatedTitles={popularTitle}/>
                <Pagination 
                    count={lastTitlePage} 
                    color="primary"
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </div> : 
        <div className="wrapper-height">
            <Loading/>
        </div>
    )
}