import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

import './404.scss'

export const ErrorSearch: React.FC = () => {

    const navigate = useNavigate()

    return(
        <div className="error-wrapper">
            <Button className="back-button" style={{display: 'block'}} onClick={() => navigate('/')}>Back to main page</Button>
            <h1>Title not found</h1>
        </div>
    )
}