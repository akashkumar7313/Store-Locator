import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataCityWise } from '../../redux/slices/storeDataSlice';
 
const SearchDetail = () => {
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityId, setCityId] = useState('');
  
  const handleStateChange = (event) => {
    const state_id = event.target.value;
    axios.get('http://localhost:4001/get/get_cities/'+state_id).then((res)=> {
      setCities(res.data.cities)
      console.log(res.data)
    }).catch((error)=> {
      console.log('Error from api: ', error);
    })
  };

  const handleCityChange = (event) => {
    const city_id = event.target.value;
    setCityId(city_id);
  };

  // const showStore =()=>{
  //   axios.get(`http://localhost:4001/get/get_stores/${cityId}`).then((res)=>{
  //     setStore(res.data.stores)
  //     console.log(res.data.stores)
  //   }).catch((error)=>{
  //     console.log('Error from api:',error)
  //   })
  // }

  const dispatch = useDispatch();
  const showStore = () => {
    dispatch(getDataCityWise(cityId));
  }



  useEffect(() =>{
    axios.get('http://localhost:4001/get/allstate').then((res)=> {
      setState(res.data.states)
    }).catch((error)=> {
      console.log('Error from api: ', error);
    })
    
  }, []);

  return (
    <div className='lg:flex ml-4 lg:ml-0 '>
      <div className='mt-4 md:flex gap-10 grid gap-y-4'>
        <div>
      <select onChange={handleStateChange} className='border border-black h-12 w-[390px] md:w-[300px] lg:w-[400px] rounded-md pl-3 font-semibold'>
        <option value="" >Select State</option>
        {state.map((state) => (
          <option key={state._id} value={state._id}>
            {state.state_name}
          </option>
        ))}
      </select>
      </div>
      <div>
      <select  className='border border-black h-12 rounded-md w-[390px] md:w-[300px] lg:w-[400px] pl-3 font-semibold' onChange={handleCityChange}>
        <option value="" >Select Cities</option>
        {cities.map((district) => (
          <option key={district._id} value={district._id}>
            {district.city_name}
          </option>
        ))}
      </select>
    </div>
    </div>
    <div className='flex md:justify-center'>
    <button onClick={showStore} className='mt-4 md:mt-8 lg:mt-4 lg:ml-10 h-12 lg:mr-4 w-[390px] md:w-[300px] font-semibold lg:w-[400px] bg-gray-900 hover:bg-gray-600 text-white rounded-md'>Search</button>
    </div>
    </div>
  );
};
export default SearchDetail;