import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from '/src/components/SearchResult/SearchResult'
// TODO: Consumo de dados, estilização do material UI

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>
          62 estadias · 26 de agosto a 30 de agosto · 2 hóspedes
        </p>
        <h2>Fique por perto</h2>
        <Button variant='outlined'>Flexibilidade de Cancelamento</Button>
        <Button variant='outlined'>Tipo de lugar</Button>
        <Button variant='outlined'>Preço</Button>
        <Button variant='outlined'>Quartos e camas</Button>
        <Button variant='outlined'>Mais filtros</Button>
      </div>
      <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
    </div>
  )
}

export default SearchPage