import React from"react";

import merc from './merc.jpg';
import toy from './toyt.jpg';
import bmw from './bmw.jpg';
import ford from './ford.jpg';
import './style.css'

function Products() {
    return(
        <div className='s'>
        <div>
        <Car src={merc} discription='mercedes 2023 new car' color='grey' gear='automatic'/>
        <Car src={bmw} discription='bmw 1975 classsic car' color='red'  gear='regular'/>
        </div>
        <div>
        <Car src={toy} discription='toyota 2018 car' color='blue' gear='automatic'/>
        <Car src={ford} discription='ford 1989 classic car' color='black' gear='regular'/>
        </div>
        </div>
    );
}

export default Products;