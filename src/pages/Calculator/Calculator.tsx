import { Navigation } from "../../components/Navigation/Navigation"
import { TimeForm } from "../../components/TimeForm/TimeForm"

import './Calculator.scss'


export const Calculator : React.FC = () => {

    return(
        <div className="calculator-wrapper">
            <Navigation/>
            <div className="calculator">
                <div className="calculator-placeholder">
                    <button>
                        Choose anime
                    </button>
                </div>
                <TimeForm/>
            </div>
        </div>
    )
}