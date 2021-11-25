import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div>
            <h1 className="m-3" style={{color:"white"}}>E-commerce app built using React, Redux, Bootstrap</h1>
            <Products />
        </div>
    )
};

export default Home;