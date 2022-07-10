import React from 'react'
import '../../Styles/CreatePosts.css'
import FormPosts from './FormPosts'
import ImgPosts from './ImgPosts'

const CreatePosts = () => {
  return (
    <section className='wrapper-create-posts'>
      <ImgPosts />
      <FormPosts />
    </section>
  )
}

export default CreatePosts