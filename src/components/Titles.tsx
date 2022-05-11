import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from './PaginatedTitles/PaginatedTitles';
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedTitles, setCurrentTitlePage } from "../store/actions/title-action-creators";
import { getFromStorage } from "../utils/storage";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const {paginatedTitles, lastTitlePage, currentTitlePage} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchPaginatedTitles(currentTitlePage))
    },[currentTitlePage, topic])

    return(
        <>
            <PaginatedTitles 
                paginatedTitles={paginatedTitles}
            />
            <Pagination 
                count={lastTitlePage} 
                defaultPage={1}
                color="primary"
                onChange={(e, value) => dispatch(setCurrentTitlePage(value))}
            />
        </>
    )
}