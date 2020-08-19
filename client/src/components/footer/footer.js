import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import './footer.scss'

const Footer = () =>{
    return(
        <div className='footer'>
            <h5>Ma gasesti si pe instagram sau facebook: <FacebookIcon/> <InstagramIcon/></h5>
            <h5>@mihaiduluman</h5>
        </div>
    )
}

export default Footer;