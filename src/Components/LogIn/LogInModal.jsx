import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../Styles/LogInModal.css'
import imgLogo from '../../Assets/logoNavbar.png'

const LogInModal = ({ show, onClose, title, subtitle, children }) => {

  const stop = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <TransitionGroup>
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <section 
        className='modal' onClick={onClose}>
        <div className='modal-content' onClick={stop}>
          <header className='modal-header'>
            <img className='modal-logo' src={imgLogo} alt="Recetapp Logo" />
            <h1 className='modal-title'>{title}</h1>
            <h4 className='modal-subtitle'>{subtitle}</h4>
          </header>
          <article className='modal-body'>
            {children}
          </article>
          <footer className='modal-footer'>
            {/* <button onClick={onClose} className='btn'>

            </button> */}
            <p className='modal-text-footer'>¿Aún no posees una cuenta?</p>
            <p className='modal-text-footer'>¡Regístrate ahora!</p>
            <a href='/register' className='modal-btn-footer'>
              Sign Up
            </a>
          </footer>
        </div>
      </section>
    </CSSTransition>
    </TransitionGroup>,
    document.getElementById('root')
  )
}

export default LogInModal