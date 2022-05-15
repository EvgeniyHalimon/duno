import { useState } from "react"
import { useDispatch } from "react-redux"

import { TitlesPopUp } from "../TitlesPopUp/TitlesPopUp"
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { dispatchChoosenTitle, dispatchShowPopup } from "../../store/actions/anime-action-creators"
import './CalculatorPlaceholder.scss'

export const CalculatorPlaceholder = () => {

    const dispatch = useDispatch()

    const {choosenTitle, showPopup} = useTypesSelector(state => state.anime)

    return(
        <div>
            <div className="calculator-placeholder">
                <div>
                    {
                        choosenTitle ? 
                        <div className="title-card">
                            <img className="title-card-poster" src={choosenTitle.images?.webp.large_image_url} alt={`${choosenTitle.title}-poster`} />
                            <p className="title-card-name">{choosenTitle.title}</p>
                            <p className="title-card-name">{choosenTitle.title_japanese}</p>
                        </div> :
                        <>
                            <div className="mock-block"></div>
                            <div className="mock-text"></div>
                            <div className="mock-text"></div>
                        </> 
                    }
                    
                </div>
                <div className="button-block">
                    <button
                        onClick={() => dispatch(dispatchShowPopup(true))}
                    >
                        Choose anime
                    </button>
                    <button
                        onClick={() => dispatch(dispatchShowPopup(true))}
                    >Update</button>
                    <button
                        onClick={() => dispatch(dispatchChoosenTitle(null))}
                    >Delete</button>
                </div>
            </div>
            {
                showPopup ?
                <TitlesPopUp/> :
                null
            }
        </div>
    )
    
}