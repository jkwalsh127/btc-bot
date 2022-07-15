import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import HeroSmallScreen from '../components/HeroSmallScreen';
import useWindowDimensions from '../components/utils/windowDimensions';

export default function Landing({poster, setPoster}) {

    const { width } = useWindowDimensions();

    return (
        <div className='landing-container'>

            {
                width < 550 ? <HeroSmallScreen /> : <Hero />
            }
            <Hero setPoster={setPoster} poster={poster}/>
            <Info />

        </div>
    );
}
