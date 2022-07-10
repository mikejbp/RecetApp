import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch, GoSignIn } from "react-icons/go";
import Sidebar from './Sidebar';
import imgLogo from '../Assets/logoNavbar.png'
import LogIn from '../Components/Login/Login';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <header className='navbar-wrapper'>
      <article className='navbar'>
        <section className='left-side'>
          <button type='button' 
            onClick={openSidebar} 
            className='menu-btn'>
            {sidebar ? <Sidebar /> : null}
            <GiHamburgerMenu 
              style={{fontSize: '3rem'}} />
          </button>
          <a href='/home' className='logo-btn'>
            <img src={imgLogo} alt='' className='logo-img' />
            <div className='text-container'>
              <h1 className='title'>RecetApp</h1>
              <p className='subtitle'>Share your ideas</p>
            </div>
          </a>
        </section>

        <section className='center'>
          <nav className='navigation'>
            <a href='/home' className='text-navigation'>
              Inicio
            </a>
            <a href='/Recetas' className='text-navigation'>
              Recetas
            </a>
            <a href='/create' className='text-navigation'>
              Crear
            </a>
            <a href='/profile' className='text-navigation'>
              Perfil
            </a>
          </nav>
          <a className='search' href='/searcher'>
            <p>Clickea para Buscar</p>
            <button type='button' className='search-btn'>
              <GoSearch />
            </button>
          </a>
          
        </section>

        <section className='right-side'>
          <LogIn btnClass='login-btn' btnLogin='Sign In' btnIconClass='signin-btn' btnIconContent={<GoSignIn />} />
          {/* <button className='signin-btn'>
            <GoSignIn />
          </button> */}
          <button type='button' className='avatar'>
            <img src='https://www.svgrepo.com/show/56069/avatar.svg' alt='avatar-profile' className='avatar-img' />
          </button>
        </section>
      </article>
    </header>
    </>
    
  )
}

export default Navbar