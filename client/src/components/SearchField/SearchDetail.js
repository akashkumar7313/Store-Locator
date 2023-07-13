import axios from 'axios';
import React, { useState, useEffect } from 'react';
const SearchDetail = () => {
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  
  const handleStateChange = (event) => {
    const state_id = event.target.value;
    // setSelectedState(stateName);
    // const selectedState = data.states.find((state) => state.name === stateName);
    // setCities(selectedState ? selectedState.cities : []);
    axios.get('http://localhost:4001/get/get_cities/'+state_id).then((res)=> {
      setCities(res.data.cities)
    }).catch((error)=> {
      console.log('Error from api: ', error);
    })
  };

  useEffect(() =>{
    axios.get('http://localhost:4001/get/allstate').then((res)=> {
      setState(res.data.states)
    }).catch((error)=> {
      console.log('Error from api: ', error);
    })
  }, []);

  return (
    <div className= ' mt-4 md:flex gap-10 grid gap-y-4'>
        <div>
      <select onChange={handleStateChange} className='border border-black h-12 w-[390px] md:w-[400px] rounded-md pl-3 font-semibold'>
        <option value="" >Select State</option>
        {state.map((state) => (
          <option key={state._id} value={state._id}>
            {state.state_name}
          </option>
        ))}
      </select>
      </div>
      <div>
      <select  className='border border-black h-12 rounded-md w-[390px] md:w-[400px] pl-3 font-semibold'>
        <option value="" >Select Cities</option>
        {cities.map((district) => (
          <option key={district._id} value={district.city_name}>
            {district.city_name}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};
export default SearchDetail;