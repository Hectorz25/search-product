import React from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchInput = () => {
  return (
    <section>
        <div className='searchMenu'>
            <form action="#" className='form-controls'>
                <div>
                    <input type="text" className='searchInput-Field' placeholder='Search by Name or SKU' autoComplete='false'/>  
                    <button type='button' className='searchButton'><FaSearch className=''/></button>
                </div>
            </form>
        </div>
    </section>
  )
}
