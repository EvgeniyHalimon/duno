import {useState} from "react";
import { useNavigate } from "react-router";

export const Search: React.FC = () => {
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
        localStorage.setItem('searchTerm', e.target.value)
    }
    
    return(
        <input 
            type="text" 
            className="search-input"
            onChange={e => handler(e)}
            onKeyDown={(e) => navigateToList(e)}
        />
    )
}