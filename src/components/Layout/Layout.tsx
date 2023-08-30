import { Box } from '@mui/material';
import { useEffect } from 'react';

import { Navigation } from "../../components/Navigation/Navigation";
import { getFromStorage, setToStorage } from "../../utils/storage";
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout = () => {

    if(getFromStorage('topic') === null){
        setToStorage('topic', 'anime')
    }
   
    const {isTitle} = useTypesSelector(state => state.title)

    useEffect(() => {
    },[isTitle])

    return (
        <Box className="layout">
            <Navigation/>
            <Outlet/>
        </Box>
    )
}