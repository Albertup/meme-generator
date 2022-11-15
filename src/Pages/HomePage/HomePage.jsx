import React from 'react'
import logo from '../../assets/img/logo-03.png';
import title from '../../assets/img/looney-tunes.svg';
import thatsall from '../../assets/img/thats-all.png';
import brand from '../../assets/img/warner-bros.svg';
import './HomePage.scss'

const HomePage = () => {
  return (
        <div className='p-home'>
        <img src={title} className="c-home-title" alt="title" />
        <img src={thatsall} className="c-home-words" alt="thats all" />
        <img src={logo} className="c-app-logo" alt="logo" />
        <img src={brand} className="c-home-brand" alt="thats all" />
        </div>
  )
}

export default HomePage