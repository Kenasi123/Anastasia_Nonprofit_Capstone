import React, { useState, useEffect } from 'react'; 

import { useWindupString } from "windups";



const Testimonials = () => {

    const [currentTestimonial] = useWindupString(
        "Satisfying food that feeds your soul with great company", {
            pace: () => 100

        }
    );

    return(
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px', 
            background: 'linear-gradient(315deg, #feae96 0%, #fe0944 74%)'
        }}>
            <h2 style={{color: 'whitesmoke'}}>"{currentTestimonial}"</h2>
        </div>
    )
}

export default Testimonials;