import React, { useEffect, Fragment } from 'react';
import BlogCard from './blog-card/Blog-card';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store/store';

import { loadPosts, deletePost } from '../../actions/post';

import CustomeButton from '../custome-button/custome-button';

import image from '../../assets/sala1.png';
import './blog.styles.scss';

const Blog = ({auth: { isAuthenticated, loading }, posts }) => {

	useEffect(() => {
		store.dispatch(loadPosts());
	}, []);

	return (
		<div className="blog">
			<h3>Blog</h3>
			<div className="bara" />
			<h4>Ultimele articole</h4>

			{posts.posts.map((post) => {
				return (
					<Fragment key={post._id}>
						<BlogCard
							image={`http://localhost:4000/file/${post.image}`}
							title={post.title}
							description={post.content[0].firstParagraph}
						/>
						{!loading && <Fragment>{isAuthenticated ? <div onClick={(e) => store.dispatch(deletePost(post._id))}>delete</div> : null}</Fragment>}

						<CustomeButton />
					</Fragment>
				);
			})}

			<div className="motivatie" style={{ backgroundImage: `url(${image})` }}>
				<h3>
					<span>&#34;</span>
					Viața începe în afara zonei tale de confort.
					<span>&#34;</span>
				</h3>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({ posts: state.posts, auth: state.auth });

export default connect(mapStateToProps, { loadPosts })(Blog);
