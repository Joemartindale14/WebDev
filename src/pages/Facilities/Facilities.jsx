import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import ImageTextPair from "../../components/ImageTextPair/ImageTextPair";
import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
        <HeaderContainer imageSrc="/facilities_header_img.webp" title="FACILITIES" loading="lazy"/>
        <hr />
        <ImageTextPair imageSrc="/entrance_img.webp" heading="FRONT-OF-HOUSE" text="At Strive Fusion, our front-of-house desk is your go-to spot for a quick, nutritious boost before or after your workout.
                                                          
                                                          We offer a variety of protein shakes, energy bars, and healthy snacks to fuel your fitness journey. Looking for something to sip on? Our menu includes freshly brewed coffees and smoothies, perfect for recharging or relaxing.
                                                          
                                                          Whether you're in need of a post-workout refuel or a pre-session pick-me-up, our front desk ensures you're energized with high-quality options that support your goals. Stop by and treat yourself to something delicious and nutritious to complement your fitness routine." loading="lazy" reverse/>
        <ImageTextPair imageSrc="/gymfloor_img.webp" heading="GYM FLOOR" text="At Strive Fusion, the gym floor is the heart of our fitness experience. Designed with a modern layout, it features dedicated zones for strength training, cardio, and functional exercises. 
        
                                                          Our free weights area is equipped with dumbbells, kettlebells, and barbells, while the cardio section offers treadmills, bikes and rowing machines. Take a look at our range of equipment and find the tools you need to reach your fitness goals.
                                                          
                                                          For those looking to challenge themselves, the functional training zone includes ropes, resistance bands, and plyometric boxes." loading="lazy" />
        <ImageTextPair imageSrc="/studio_img.webp" heading="STUDIO FLOOR" text="At Strive Fusion, our studio floor space is designed to elevate your workout experience. This versatile area hosts a variety of classes, including yoga, Pilates, dance, and high-intensity interval training (HIIT). 
        
                                                        With smooth, cushioned flooring, it provides the ideal environment for low-impact exercises, stretching, and mobility work. The studio is equipped with mats, blocks, resistance bands, and other props to enhance your sessions. 
                                                        
                                                        Whether you're attending a calming yoga flow or an energizing dance class, the studio floor offers a spacious and comfortable setting, helping you stay focused and achieve your fitness goals in a peaceful, motivating atmosphere." loading="lazy" reverse />
        <ImageTextPair imageSrc="/changingrooms_img.webp" heading="CHANGING FACILITIES" text="At Strive Fusion, our changing rooms are designed with your comfort and convenience in mind. Equipped with private showers, clean toilets, and secure lockers, these spaces ensure you can freshen up before or after your workout. 
        
                                                              The lockers provide a safe place to store your personal belongings while you focus on your fitness goals. With modern, spacious layouts and ample privacy, our changing rooms offer a relaxing environment where you can easily transition in and out of your workout. 
                                                              
                                                              Whether you're staying for a quick session or a longer visit, we make sure you're taken care of every step of the way." loading="lazy" />
    </section>
  );
};

export default Facilities;

