import React from "react";
import { Title } from "./Title";

import { ITitle } from "../types/types";

interface IPaganatedTitles{
    paginatedTitles: ITitle
}

export const PaginatedTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {
    return(
        <div className="titles-section">
            <div className="titles-list">
                {paginatedTitles && paginatedTitles.map((titles: ITitle) => 
                    <Title title={titles} key={titles?.url}/>
                )}
            </div>
        </div>
    )
}