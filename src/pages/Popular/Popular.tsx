import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../../components/PaginatedTitles/PaginatedTitles";
import { Loading } from "../../components/Loading/Loading";
import { fetchPopularTitle } from "../../store/actions/title-action-creators";
import { useAppDispatch, useTypedSelector } from "../../hooks";
import { getFromStorage } from "../../utils/storage";

export const Popular = () => {
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {popularTitle, lastTitlePage, isTitle} = useTypedSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchPopularTitle(currentPage))
    },[topic, currentPage, isTitle])

    return(
        popularTitle.length !== 0 ?
        <div className="wrapper">
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