import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setChoosenTitle } from "../../store/actions/anime-action-creators";
import { PopupTitle } from "../PopupTitle/PopupTitle";
import { ITitle } from "../../types/types";
import './PopupTitles.scss'

interface IPaganatedTitles{
    paginatedTitles: ITitle
}

export const PopupTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {

    const dispatch = useDispatch()

    const [id, setId] = useState(null)
    
    const handleClick = (titles: any) => {
        setId(titles?.mal_id)
        dispatch(setChoosenTitle(titles))
    }
    
    useEffect(() => {
        
    },[id])

    return(
        <div className="popup-list">
            {paginatedTitles && paginatedTitles.map((titles: ITitle) => 
                <div className={`popup-titles-item ${id === titles.mal_id ? 'border-active' : ''}`} onClick={() => handleClick(titles)}>
                    <PopupTitle title={titles} key={titles?.url}/>
                </div>
            )}
        </div>
    )
}