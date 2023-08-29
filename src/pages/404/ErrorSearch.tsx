import { useNavigate } from "react-router-dom"

import { Button } from "@mui/material"
import './404.scss'

export const ErrorSearch = () => {

    const navigate = useNavigate()

    return(
        <div className="error-wrapper" role={'wrapper'}>
            <Button className="back-button" onClick={() => navigate('/')}>Back to main page</Button>
            <h1>Title not found</h1>
        </div>
    )
}