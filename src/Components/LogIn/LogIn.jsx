import React, { useState, useEffect } from 'react'
import LogInModal from './LogInModal'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { api_url } from '../../api.global'
import axios from 'axios'

const LogIn = ({ btnClass, btnLogin, btnIconClass, btnIconContent }) => {
  const [show, setShow] = useState(false);
  
  const [credential, setCredential] = useState({
    username: "",
    password: ""
  });

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

 /* const apiURL = api_url + 'login';
  const petitionPost = async () => {
        await axios.post(apiURL)
            .then(response => {
              console.log(response.data)
                setCredential(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    

    const handleChangeUser = e => {
        setCredential(e.target.value)
    }

    const handleChangePass = e => {
        setCredential(e.target.value)
    } */
  /* const apiUrl = api_url + 'login';
  const petitionPost = async () => {
      
        await axios.post(apiUrl)
            .then(response => {
                setUsername(response.data)
                setPassword(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const handleChangeUser = e => {
        setUsername(e.target.value)
    }

    const handleChangePass = e => {
        setPassword(e.target.value)
    } 

  useEffect(() => {
        petitionPost();
    }, [])  */


  return (
    <>
      {<button className={btnClass} onClick={openModal}>{btnLogin}</button>}
      {<button className={btnIconClass} onClick={openModal}>{btnIconContent}</button>}
      <LogInModal 
        title="RECETAPP" 
        subtitle="Share your ideas"
        onClose={closeModal} 
        show={show}>
          <form  className='modal-form'>
            <section className='modal-icontext'>
              <div className='modal-icon-wrapper-one'>
                <FaUserAlt className='modal-icon' />
              </div>
            <input 
            type='text' 
            id='username'
            className='modal-input-one' 
            placeholder='Username' 
            value={credential.username}
            required></input>
            </section>
            <section className='modal-icontext'>
              <div className='modal-icon-wrapper-two'>
                <FaLock className='modal-icon' />
              </div>
              <input 
              type='password' 
              id='password'
              className='modal-input-two' 
              placeholder='Password' 
              value={credential.password}
              required></input>
            </section>
            <span className='modal-text-wrapper'>
              <a href='#' className='modal-text'>¿Olvidaste tu contraseña?</a>
            </span>
            <a href='/profile'>
              <button type='submit' className='modal-btn'>
                LOGIN
              </button>
            </a>
            
          </form>
      </LogInModal>
    </>
  )
}

export default LogIn