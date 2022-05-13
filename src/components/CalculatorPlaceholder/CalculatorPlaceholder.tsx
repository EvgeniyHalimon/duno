import { useState } from "react"
import { TitlesPopUp } from "../TitlesPopUp/TitlesPopUp"

export const CalculatorPlaceholder = () => {

    const [isShow, setIsShow] = useState(false)

    return(
        <div>
            <div className="calculator-placeholder">
                <div>
                    <div className="mock-block"></div>
                    <div className="mock-text"></div>
                    <div className="mock-text"></div>
                </div>
                <div className="button-block">
                    <button
                        onClick={() => setIsShow(true)}
                    >
                        Choose anime
                    </button>
                    <button
                        onClick={() => setIsShow(true)}
                    >Update</button>
                    <button
                        onClick={() => setIsShow(false)}
                    >Delete</button>
                </div>
            </div>
            {
                isShow ?
                <TitlesPopUp/> :
                null
            }
        </div>
    )
    
}