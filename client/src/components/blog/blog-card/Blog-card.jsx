import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './blog-card.styles.scss';

const BlogCard = ({ image, title, description,post_id,aditional,date }) => {
	return (
		<Card className={`card ${aditional? 'full-width': null}`}>
				<CardMedia className="media" image={image} title={title} />
				<CardContent>
					<Typography className="date" component='p'>
						11 <br/> iunie
					</Typography>
					{aditional? 
					<Typography className='aditional' color="textSecondary" component="p">
          				De Duluman Mihai {date} 
        			</Typography>
					:null}
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			<CardActions>
				<Button size="small"  href={`/blog/${post_id}`}>
					Afla mai multe
					<ArrowForwardIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default BlogCard;
