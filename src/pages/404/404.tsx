import { useNavigate } from "react-router-dom"

import { Button } from "@mui/material"
import './404.scss'

export const Error: React.FC = () => {

    const navigate = useNavigate()

    return(
        <div className="error-wrapper" role={'wrapper'}>
            <Button className="back-button" onClick={() => navigate('/')}>
                <p className="back-button">Back to main page</p>
            </Button>
            <h1>Page not found</h1>
        </div>
    )
}