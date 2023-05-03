import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className='header'>
        <Link to='/'>
          <img
              className="header__icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="Airbnb Logo"
          />
        </Link>
        <div className='header__searchBar'>
          <SearchBar/>
        </div>
    </header>
  )
}

export default Header
// <Link to='/'>
//   <img
//       className="header__icon"
//       src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
//       alt=""
//   />
// </Link>
// <div className='header__center'>
//     <input type="text" name="" id="" />
//     <SearchIcon/>
// </div>
// <div className='header__right'>
//     <p>Anuncie seu Espaço</p>
//     <LanguageIcon/>
//     <ExpandMoreIcon/>
//     <Avatar/>
// </div>