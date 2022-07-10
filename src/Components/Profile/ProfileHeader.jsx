import React from 'react'
import '../../Styles/ProfileHeader.css'
import imgProfile from '../../Assets/instagram-profile.svg'
import {Link} from 'react-router-dom'
import {IoCreateOutline} from 'react-icons/io5'

const ProfileHeader = () => {

  return (
    <>
      {<aside className='profile-header mobile'>
        <header className='profile-header-header'>
          <article className='profile-img'>
            <img className='img-style' src={imgProfile} alt="profile img" />
          </article>
          <div className='profile-username'>
            <h2 className='username'>flortalavera_</h2>
            {/* <button type='button' className='btn-edit'>
              Editar
            </button> */}
            <Link to='/create'>
              {<button type='button' className='button-crearpost'>
                Crear Post
              </button>}
              {<IoCreateOutline className='crearpost mobile' />}
            </Link>
          </div>
        </header>
        <div className='profile-description'>
            <p className='profile-name'>
            Florencia Talavera
            </p>
            <span className='description-profile'>
              Nutriólogo | Nutricionista | Coach | Deportista | Amante de las papas
            </span>
          </div>
        <article className='profile-info'>
          <div className='profile-statics'>
            <span className='statics'>
              <b className='text-one'>14</b>
              <p className='text-two'>posts</p>
            </span>
            <span className='statics'>
              <b className='text-one'>40</b>
              <p className='text-two'>seguidores</p>
            </span>
            <span className='statics'>
              <b className='text-one'>23</b>
              <p className='text-two'>seguidos</p>
            </span>
          </div>
        </article>
      </aside>}
    </>
  )
}

export default ProfileHeader