import {useState} from "react";
import { useNavigate } from "react-router";
import { setToStorage } from "../../utils/storage";

export const Search = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    function navigateToList(e: any){
        if(e.key === "Enter"){
            navigate({
                pathname: '/search-result-list',
                search: `?search=${searchTerm}`,
            })
        }
    }
    
    const handler = (e: any) => {
        setSearchTerm(e.target.value)
        setToStorage('searchTerm', e.target.value)
    }
    
    return(
        <input 
            type="text" 
            className="search-input"
            data-testid="search-input"
            onChange={e => handler(e)}
            onKeyDown={(e) => navigateToList(e)}
        />
    )
}