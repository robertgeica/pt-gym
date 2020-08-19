import React from 'react';
import CustomeButton from '../custome-button/custome-button'

import './image-text.styles.scss';


const ImageText = ({img, title, description, link,reverse}) =>{
    return(
        <div className={`image-text ${reverse? 'reverse':null}`} >
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