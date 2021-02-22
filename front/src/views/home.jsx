import React from 'react';
import Welcome from '../components/landingpage/welcome';
import OurJob from '../components/landingpage/ourjob';
import WhyPP from '../components/landingpage/whypp';
import Price from '../components/landingpage/price';
// import Carousel from '../components/landingpage/carousel';
import Form from '../components/landingpage/form';

const Home = () => {
    return (
        <>
        <div>

            {/* <Carousel /> */}
            <Welcome />
            <OurJob />
            <WhyPP />
            <Price />
            <Form />
        </div>
        </>
    );
}

export default Home;