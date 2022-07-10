import React, { useState } from 'react'
import '../Styles/Sidebar.css'
import imgLogo from '../Assets/logoNavbar.png'
import { VscChromeClose } from 'react-icons/vsc'
import { BiFoodMenu, BiHome } from 'react-icons/bi'
import { FaVoteYea } from 'react-icons/fa'
import { MdRecentActors } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

const Sidebar = () => {
  const [sidebarMenu, setSidebarMenu] = useState(false);

  const closeSidebar = () => setSidebarMenu(!sidebarMenu);

  const stop = (e) => e.stopPropagation();

  return (
    <aside className='sidebar-container'>
    <section className='sidebar-wrapper'>
      <article className='content-wrapper'>

        <div className='close-btn-wrapper'>
        <header className='header-wrapper'>
          <img 
          className='logo' 
          src={imgLogo} 
          alt='RECETAPP' />
          <h1 className='title'>RecetApp</h1>
      </header>
      <button 
        onClick={closeSidebar}  
        className='close-btn'>
        {sidebarMenu ? <section className={sidebarMenu ? 'sidebar-wrapper close' : ''}></section> : null}
        <VscChromeClose style={{fontSize: '3rem'}} />
        </button>
      </div>

      <nav className='nav-wrapper'>
        <div className='nav-links'>
          <span className='nav-pos'>
            <BiHome style={{fontSize: '3rem', color: 'var(--dark-color)'}} />    
            <a href='/home' className='text-nav'>Inicio</a>   
          </span>
          <span className='nav-pos'>
            <BiFoodMenu className='icon' style={{fontSize: '3rem', color: 'var(--dark-color)'}} />
            <a href='/Recetas' className='text-nav'>Recetas</a>  
          </span>
          <span className='nav-pos'>
            <FaVoteYea className='icon' style={{fontSize: '3rem', color: 'var(--dark-color)'}} />
            <a href='/create' className='text-nav'>Crear</a> 
          </span>
          <span className='nav-pos'>
            <MdRecentActors className='icon' style={{fontSize: '3rem', color: 'var(--dark-color)'}} />
            <a href='/profile' className='text-nav'>Perfil</a>
          </span>
          <span className='nav-pos'>
            <GoSearch className='icon' style={{fontSize: '3rem', color: 'var(--dark-color)'}} />
            <a href='/searcher' className='text-nav'>Buscar</a>
          </span>
          
        </div>
      </nav>
      </article>
    </section>
  </aside>
  )
}

export default Sidebar