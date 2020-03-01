import React from 'react';
import { Link } from 'react-router-dom';
import StickerCalc from '../components/StickerCalc';

function Home() {
    return (
        <div>
            {/* <h1>Welcome to Project Nighthawk.</h1> <br/>
            <h2>The first rule of Project Nighthawk is: NO FIGHT CLUB REFERENCES </h2>  */}
            <Link to= "/about">About</Link> |   
            <Link to= "/signup"> Sign Up</Link><br/><br/>
            <StickerCalc />
        </div>
    )
}

export default Home
