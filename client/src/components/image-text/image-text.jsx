import React from 'react';
import CustomeButton from '../custome-button/custome-button'

import './image-text.styles.scss';


const ImageText = ({img, title, description, link}) =>{
    return(
        <div className='image-text'>
            <img src={img} className="image" />

            <div className='text'>
                <h3>{title}</h3>
                <p>{description} </p>
                <CustomeButton
                    link={link}
                />
            </div>
        </div>
    )
}
export default ImageText;