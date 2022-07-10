import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'

const UserProfile = () => {
  return (
    <>
    <section className='profile-container'>
      <ProfileHeader />
      <ProfileBody />
    </section>
    </>
  )
}

export default UserProfile