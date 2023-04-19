import React, { useState } from 'react';
import { Button } from '@mui/material';
import './Banner.css'
import SearchDates from '/src/components/SearchDates/SearchDates';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <SearchDates/>}
            <Button 
                className='banner__searchButton' 
                variant='outlined'
                onClick={() => setShowSearch(!showSearch)}
                >Pesquisar Datas
            </Button>
        </div>
        <div className='banner__info'>
            <h2>Viaje e exercite sua imaginação</h2>
            <h5>
                Planeje formas diferentes de fugir da rotina e descobrir novos lugares perto de você.
            </h5>
            <Button variant='outlined'>
                Explore ao redor
            </Button>
        </div>
    </div>
    )
}

export default Banner