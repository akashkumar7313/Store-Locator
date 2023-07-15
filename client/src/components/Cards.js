import React, { useEffect } from 'react';
import DynamicCard from './Card';
import image1 from './assets/R094.jpeg'
import image2 from './assets/R144.jpg'
import image3 from './assets/R169.jpeg'
import image4 from './assets/R214.jpg'
import image5 from './assets/R102.jpeg'
import image6 from './assets/R192.jpeg'
import image7 from './assets/R033.jpeg'
import image8 from './assets/R085.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/slices/storeDataSlice';

const App = () => {


    const cards = [
        {
            imageSrc: `${image1}`,
        },
        {
            imageSrc: `${image2}`,
        },
        {
            imageSrc: `${image3}`,
        },
        {
            imageSrc: `${image4}`,

        },
        {
            imageSrc: `${image5}`,

        },
        {
            imageSrc: `${image6}`,

        },
        {
            imageSrc: `${image7}`,

        },
        {
            imageSrc: `${image8}`,
        },
    ];

    const storeData = useSelector((store) => store.storeData.stores.stores)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllData());
    }, [!storeData]);

    return (
        <>
            <div className=" ml-4 md:ml-0 md:flex flex-wrap md:justify-center grid gap-y-6 md:gap-[40px] mt-14">
                {storeData && storeData.map((store, index) => (
                    <DynamicCard key={index}
                        imageSrc={cards[index].imageSrc}
                        name={store.name}
                        address={store.address}
                        day={store.day}
                        time={store.time}
                        contact={store.contact}
                    />
                ))}
            </div>
        </>
    );
};

export default App;