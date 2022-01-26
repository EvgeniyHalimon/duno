import React from "react";
import { SliderCardInfo } from "./SliderCardInfo";

export const SliderInfo: React.FC<any> = ({randomTitles}) => {

    return(
        <React.Fragment>
            {randomTitles && randomTitles.map((titles: any) => 
            <div
                className="slide"
                key={titles.url}
            >
                
                        <SliderCardInfo titles={titles}/>
            </div>
            )}
        </React.Fragment>
    )
}