import React, { useState } from 'react';
const SearchDetail = () => {
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const data = {
    states: [
      {
        name: "Andhra Pradesh",
        cities: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa']
      },
      {
        name: "Arunachal Pradesh",
        cities: ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang']
      },
      {
        name: "Assam",
        cities: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong']
      },
      {
        name: "Bihar",
        cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"]
      },
      {
        name: "Chhattisgarh",
        cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"]
      },
      {
        name: "Goa",
        cities: ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa"]
      },
      {
        name: "Gujarat",
        cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"]
      },
      {
        name: "Haryana",
        cities: ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Karnal"]
      },
      {
        name: "Himachal Pradesh",
        cities: ["Shimla", "Mandi", "Dharamshala", "Solan", "Kullu"]
      },
      {
        name: "Jharkhand",
        cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"]
      },
      {
        name: "Karnataka",
        cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi"]
      },
      {
        name: "Kerala",
        cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
      },
      {
        name: "Madhya Pradesh",
        cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"]
      },
      {
        name: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"]
      },
      {
        name: "Manipur",
        cities: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching"]
      },
      {
        name: "Meghalaya",
        cities: ["Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara"]
      },
      {
        name: "Mizoram",
        cities: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Serchhip"]
      },
      {
        name: "Nagaland",
        cities: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"]
      },
      {
        name: "Odisha",
        cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"]
      },
      {
        name: "Punjab",
        cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"]
      },
      {
        name: "Rajasthan",
        cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"]
      },
      {
        name: "Sikkim",
        cities: ["Gangtok", "Namchi", "Gyalshing", "Ravangla", "Singtam"]
      },
      {
        name: "Tamil Nadu",
        cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"]
      },
      {
        name: "Telangana",
        cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"]
      },
      {
        name: "Tripura",
        cities: ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia"]
      },
      {
        name: "Uttar Pradesh",
        cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"]
      },
      {
        name: "Uttarakhand",
        cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"]
      },
      {
        name: "West Bengal",
        cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
      }
    ]
  };
  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    const selectedState = data.states.find((state) => state.name === stateName);
    setCities(selectedState ? selectedState.cities : []);
  };
  return (
    <div className= ' mt-4 md:flex gap-10 grid gap-y-4'>
        <div>
      <select value={selectedState} onChange={handleStateChange} className=' border border-black h-12 w-[390px] md:w-[400px] rounded-md pl-3 font-semibold'>
        <option value="" >Select State</option>
        {data.states.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      </div>
      <div>
      <select  className='border border-black h-12 rounded-md w-[390px] md:w-[400px] pl-3 font-semibold'>
        <option value="" >Select Cities</option>
        {cities.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};
export default SearchDetail;