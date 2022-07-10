import React from 'react'
import '../../Styles/ProfileBody.css'
import { BsGrid3X3 } from 'react-icons/bs'
import { ProfilePost } from './ProfilePost'

const ProfileBody = () => {
  return (
      <aside className='posts-container'>
        <div className='posts-wrapper'>
          <BsGrid3X3 style={{color: 'var(--dark-color)', margin: '1rem 0 2rem', fontSize: '2rem'}} />
          <span className='posts-text'>Posts</span>
        </div>
        
      <article className='posts-img-wrapper'>
        {ProfilePost.map((image, index) => {
        return (
          <article key={index} className='img-post'>
            <img className='image-post' src={image.imgPost} alt='img post' />
          </article>
        )
    }
      )}
      </article>
      </aside>
  )
}

export default ProfileBody