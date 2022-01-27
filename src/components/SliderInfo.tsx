import React from "react";
import { ITitles } from "../types/types";
import { SliderCardInfo } from "./SliderCardInfo";

interface IRandomTitles{
    randomTitles: ITitles | null | undefined
}

export const SliderInfo: React.FC<IRandomTitles> = ({randomTitles}) => {

    return(
        <>
            {randomTitles && randomTitles.map((titles: ITitles) => 
            <div
                className="slide"
                key={titles.url}
            >
                <SliderCardInfo titles={titles}/>
            </div>
            )}
        </>
    )
}