import { Title } from "../Title/Title";

import { ITitle } from "../../types/types";

import './PopupTitles.scss'
import { PopupTitle } from "../PopupTitle/PopupTitle";

interface IPaganatedTitles{
    paginatedTitles: ITitle
}

export const PopupTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {
    return(
        <div className="titles-list">
            {paginatedTitles && paginatedTitles.map((titles: ITitle) => 
                <PopupTitle title={titles} key={titles?.url}/>
            )}
        </div>
    )
}