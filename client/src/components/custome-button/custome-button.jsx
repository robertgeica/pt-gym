import React from 'react';

import {Link} from 'react-router-dom';

import './custome-button.styles.scss'

const CustomeButton = ({goTo}) =>{
    console.log(goTo);
    return(
        <div className="border">
                <Link className='link' to={goTo}>Vezi mai multe articole</Link>
        </div>
    )
}

export default CustomeButton;