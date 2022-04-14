import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../pages/Title";

import { ITitle } from "../types/types";

interface IPaganatedTitles{
    paginatedTitles: ITitle
}

export const PaginatedTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {
    console.log(paginatedTitles);
    return(
        <div className="titles-section">
            <div className="titles-list">
                {paginatedTitles && paginatedTitles.map((titles: ITitle) => 
                    <Title titles={titles} key={titles?.url}/>
                )}
            </div>
        </div>
    )
}