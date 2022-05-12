import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchAnimeSearch } from "../../store/actions/anime-action-creators"
import { Switcher } from "../Header/Switcher"

import './TitlesPopUp.scss'

export const TitlesPopUp = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')

    const handler = (e: any) => {
        setSearchTerm(e.target.value)
        localStorage.setItem('searchTerm', e.target.value)
    }

    const handleSearch = (e:any) => {
        if(e.key === "Enter"){
            dispatch(fetchAnimeSearch(searchTerm,1))
        }
    }

    return(
        <div className="popup">
            <Switcher/>
            <input 
                type="text" 
                className="popup-input"
                onChange={(e) => handler(e)}
                onKeyDown={(e) => handleSearch(e)}
            />
        </div>
    )
}