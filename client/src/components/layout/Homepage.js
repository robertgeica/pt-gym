import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


import ImageText from '../image-text/image-text'
import Blog from '../blog/Blog';
import Numbers from '../numbers/numbers';
import ContainerPrograme from '../programe2/programe2';

import image1 from '../../assets/photo1.png';
import sala1 from '../../assets/sala1.png';
import sala2 from '../../assets/sala2.png';

const Homepage = () => {


	return (
		<div className="homepage">

			<div className='landing'>
				<img src={image1} alt="poza"/>
				<div className='text'>
					<h3>SALUT, SUNT DULUMAN MIHAI</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="/">Afla mai multe</Link>
				</div>
			</div>

			<div className="images">
				<img src={sala1} alt="poza"/>
				<img src={sala2} alt="poza"/>
			</div>
			
			<Blog/>

			<ImageText
				img={sala1}
				title={'Program de slabit'}
				description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. Ut malesuada sapien tempor eget.'}
				link={''}
			/>

			<Numbers
				image={image1}
			/>

			<ImageText
				img={sala1}
				title={'Nutritie'}
				description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. Ut malesuada sapien tempor eget.'}
				link={''}
			/>

			<ContainerPrograme
				link='/'
				title={'Program'}
				description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin. '}
				image={image1}
			/>
		</div>
	);
};

export default Homepage;