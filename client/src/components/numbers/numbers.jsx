import React from 'react';

import './numbers.styles.scss'

const Numbers = ({image}) =>{
    return(
        <div className='numbers' style={{backgroundImage: `url(${image})`}}>
            <div className="number">
                <h1>232</h1>
                <p>lorem ipsum</p>
            </div>
            <div className="number">
                <h1>232</h1>
                <p>lorem ipsum</p>
            </div>
            <div className="number">
                <h1>232</h1>
                <p>lorem ipsum</p>
            </div>
            <div className="number">
                <h1>232</h1>
                <p>lorem ipsum</p>
            </div>
        </div>
    )
}

export default Numbers;