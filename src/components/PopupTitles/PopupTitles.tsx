import { ITitle } from "../../types/types";

import { PopupTitle } from "../PopupTitle/PopupTitle";
import './PopupTitles.scss'

interface IPaganatedTitles{
    paginatedTitles: ITitle
}

export const PopupTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {
    return(
        <div className="popup-list">
            {paginatedTitles && paginatedTitles.map((titles: ITitle) => 
                <PopupTitle title={titles} key={titles?.url}/>
            )}
        </div>
    )
}