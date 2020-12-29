import React from 'react'

import HeroSection from '../../HeroSection';

import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';

function Products() {
    return (
        <>
        <HeroSection {...homeObjThree}/> 
        <HeroSection {...homeObjTwo}/> 
        <HeroSection {...homeObjOne}/> 
        <HeroSection {...homeObjFour}/> 
        </>
    )
}

export default Products
