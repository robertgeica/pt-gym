import React from 'react';
import CustomeButton from '../custome-button/custome-button'
import image2 from '../../assets/sala2.png'; 

import './program2.styles.scss';

const ContainerPrograme = ({image, link}) =>{
    return(
        // <div className="container-programe" >
        //     <h3>
        //         PROGRAM PICIOARE
        //     </h3>
            
        //     <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
        //     </p>

        //     <CustomeButton
        //         link={link}
        //     />
        // </div>

        <div class="grid-container">
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>  
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />    
            </div>  
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                />
            </div>
            <div class="grid-item" style={{backgroundImage: `url(${image})`}}>
                <h3>
                    PROGRAM PICIOARE
                </h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. 
                </p>

                <CustomeButton
                    link={link}
                /></div> 
        </div>
    )
}

export default ContainerPrograme;