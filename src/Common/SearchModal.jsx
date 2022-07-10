import React from 'react'
import { GoSearch } from 'react-icons/go'
import '../Styles/SearchModal.css'

const SearchModal = () => {
  const stop = (e) => e.stopPropagation();

  return (
    <>
      <aside className='backdrop-searchmodal'>
        <section className='search-modal' onClick={stop}>
          <form className='form-search'>
            <input className='input-search'
            placeholder='Buscar...'>
            </input>
            <GoSearch className='icon-search' />
          </form>
        </section>
      </aside>
    </>
  )
}

export default SearchModal