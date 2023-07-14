import React from 'react'
// import SeaechState from './SearchState'
// import SearchCities from './SearchCities'
import SearchDetails from './SearchDetail'
export default function Search() {
  return (
    <div>
      <div className='text-3xl font-bold mt-12 flex justify-center'>
        <h1>STORE LOCATOR</h1>
      </div>
      <div className=' ml-4 md:flex justify-center gap-10 mt-8'>
      <SearchDetails />
      </div>
    </div>
  )
}
