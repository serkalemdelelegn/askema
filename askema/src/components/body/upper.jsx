import React, {useState, useEffect} from 'react'
import './upper.css'
import '../header.css'
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image8.jpg'; 
import image3 from '../../Assets/image8.jpg'; 
import image4 from '../../Assets/image4.jpg'; 
import image5 from '../../Assets/image5.jpg'; 
import image6 from '../../Assets/image6.jpg'; 
import image7 from '../../Assets/image7.jpg';  

export default function Upper() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Define an array of image URLs
    const backgroundImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ]; // Add more image URLs as needed

    const Text = [
        "Turning the remains of kera into lifesaving brakes – where waste meets innovation.",
        "In the world of brakes, sustainability meets safety through kera's transformation.",
        "Recycling kera waste into brake pads – where road safety and environmental responsibility unite.",
        "Innovating brakes, eliminating waste – a journey toward safer roads.",
        "Driving towards a safer future, one kera-based brake at a time.",
        "From kera to brakes – a journey towards a safer future.",
        "Solving two challenges with one innovation: Brake for safety, brake for sustainability."

    ]
    const changeBackgroundImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
    };

    // Use the useEffect hook to change the background image every 5 seconds
    useEffect(() => {
        const interval = setInterval(changeBackgroundImage, 5000);

        return () => {
            clearInterval(interval); // Cleanup the interval on unmount
        };
    }, [currentImageIndex, changeBackgroundImage]);


    return (
        <div className="body" >
            <div className="image dark-overlay">
                <img src={backgroundImages[currentImageIndex]} alt="" />

            </div>
            

            <div className="btn">
                 {/* <p>{Text[currentImageIndex]}</p> */}
                <div className="readmorebtn">
                    {/* <button className='read'>Read More</button>    */}

                    <a href="./contactus">
                        {/* <button className='contactupper'>Contact Us</button> */}
                    </a>
                </div>
            </div>
        </div>
    );

  
}
