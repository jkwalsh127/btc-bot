import React, { useState } from "react";
import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Landing() {

    const [poster, setPoster] = useState(false);

    return (
        <div className='landing-container'>

            <Hero setPoster={setPoster} poster={poster}/>
            <Info poster={poster}/>

        </div>
    );
}
