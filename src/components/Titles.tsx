import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes } from "../store/actions/anime-action-creators";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const {paginatedAnimes, lastPage} = useTypesSelector(state => state.anime)
    console.log(paginatedAnimes, '<======= for comp');
    console.log(lastPage, '<======= last page');

    useEffect(() => {
        dispatch(fetchPaginatedAnimes())
    },[])

    return(
        <div className="titles-section">
            <div className="titles-list">
                {paginatedAnimes && paginatedAnimes.map((titles: any) =>
                <div className="titles-item" key={titles.url}>
                    <p>{titles.title}</p>
                </div>
                )}
            </div>
        </div>
    )
}