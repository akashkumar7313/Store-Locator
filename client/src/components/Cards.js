import React from 'react';
import DynamicCard from './Card';
import image1 from './assets/R192.jpeg'
import image2 from './assets/R033.jpeg'
import image3 from './assets/R085.jpeg'
import image4 from './assets/R094.jpeg'
import image5 from './assets/R102.jpeg'
import image6 from './assets/R169.jpeg'



const App = () => {
    const cards = [
        {
            imageSrc: `${image1}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
        {
            imageSrc: `${image2}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
        {
            imageSrc: `${image3}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
        {
            imageSrc:`${image4}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
        {
            imageSrc: `${image5}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
        {
            imageSrc: `${image6}`,
            title: 'JayaNagar, Banglore',
            description: 'Tesva, No.77, (Old No. & 388), 11 Main Road, 3rd Block,  Banglore, Karnataka - 560041',
            time: 'Mon - Sun, 11am - 9pm',
            contact: '080 - 49753455',
        },
    ];

    return (
        <div className="card-container ml-4 md:ml-0 md:flex flex-wrap md:justify-center grid gap-y-6 md:gap-[40px] mt-14">
            {cards.map((card, index) => (
                <DynamicCard
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    time={card.time}
                    contact={card.contact}
                />
            ))}
        </div>
    );
};

export default App;
