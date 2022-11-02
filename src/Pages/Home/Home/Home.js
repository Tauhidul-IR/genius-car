import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Customers from '../Customers/Customers';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Support from '../Support/Supports';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Teams></Teams>
            <Support></Support>
            <Customers></Customers>
        </div>
    );
};

export default Home;