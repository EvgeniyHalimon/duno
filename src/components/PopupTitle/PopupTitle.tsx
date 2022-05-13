import React from "react";

import { ITitle } from "../../types/types";
import { getScoreColor } from "../../utils/getColor";

import './PopupTitle.scss'

interface IPaganatedTitle{
    title?: ITitle
}

export const PopupTitle: React.FC<IPaganatedTitle> = ({title}) => {

    const score: any = title?.score || title?.scored
    return(
        <div className="popup-titles-item">   
            <p className="popup-title">{title?.title} / {title?.title_japanese}</p>
            <div className="statistic-info">
                <p
                    style={{color : getScoreColor(score)}} className="popup-info"
                >Score : {title?.score || title?.scored}</p>
                <p className="popup-info">Rank : {title?.rank}</p>
            </div>
        </div>
    )
}