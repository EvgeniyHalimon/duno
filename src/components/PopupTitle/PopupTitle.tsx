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
        <div className="titles-item">   
            <p className="info">{title?.title} / {title?.title_japanese}</p>
            <p className="info">{title?.type}</p>
            <p
                style={{color : getScoreColor(score)}} className="info"
            >Score : {title?.score || title?.scored}</p>
            <p className="info">Rank : {title?.rank}</p>
        </div>
    )
}