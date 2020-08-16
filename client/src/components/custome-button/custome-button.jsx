import React from 'react';

import {Link} from 'react-router-dom';

import './custome-button.styles.scss'

const CustomeButton = (link) =>{
    return(
        <div className="border">
                <Link className='link' to={`/${link}`}>Vezi mai multe articole</Link>
        </div>
    )
}

export default CustomeButton;