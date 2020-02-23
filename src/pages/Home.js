import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Project Nighthawk.</h1> <br/>
            <h2>The first rule of Project Nighthawk is: NO FIGHT CLUB REFERENCES </h2> 
            <Link to= "/about">About</Link> |   
            <Link to= "/signup"> Sign Up</Link>
        </div>
    )
}

export default Home
