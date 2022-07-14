import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Landing({poster, setPoster}) {


    return (
        <div className='landing-container'>

            <Hero setPoster={setPoster} poster={poster}/>
            <Info />

        </div>
    );
}
