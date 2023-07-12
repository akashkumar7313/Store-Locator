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
        <button className='h-12 mr-4 w-[390px] font-semibold md:w-[400px] bg-gray-900 hover:bg-gray-600 text-white rounded-md mt-[14px]'>Search</button>
      </div>
    </div>
  )
}