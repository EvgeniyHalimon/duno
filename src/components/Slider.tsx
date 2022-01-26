import React from "react";
import { SlideShow } from './SlideShow';




export const Slider: React.FC = (children) => {
    return(
        <div className="slider-section">
            <SlideShow>
                {children}
            </SlideShow>
        </div>
    )
}