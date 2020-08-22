import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlogCard from '../blog/blog-card/Blog-card';
import BlogHeader from '../blog-header/Blog-header';
import Footer from '../footer/footer'

import { loadPosts, loadPost } from '../../actions/post';
import store from '../../store/store';

import './blog-page.scss';

const BlogPage = ({ posts }) => {
	const [ pageId, setPageId ] = useState(undefined);
	useEffect(() => {
		store.dispatch(loadPosts());
	}, []);

	let content = {};
	console.log(posts.posts); // array-ul care contine toate postarile

	return (
		<div className="blog-page">

			<BlogHeader/>
			{posts.posts.map((post) => {
				// obiectul post contine informatiile principale
				if (post.content == undefined) {
					console.log('wait');
				} else {
					content = { ...post.content };
					console.log(post.image);
				}


				return (
					<div key={post._id} className="post">
						<BlogCard
							image={`http://localhost:4000/file/${post.image}`}
							title={post.title}
							description={content.firstParagraph}
							aditional='asd'
							date={post.date}
							post_id={post._id}
						/>

						
					</div>
				);
			})}

			<Footer/>
		</div>
	);
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { loadPosts, loadPost })(BlogPage);
