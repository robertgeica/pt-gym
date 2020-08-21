import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPosts, loadPost } from '../../actions/post';
import store from '../../store/store';

import './blog-page.scss';

const BlogPage = ({ posts }) => {
	const [ pageId, setPageId ] = useState(undefined);
	useEffect(() => {
		store.dispatch(loadPosts());
	}, []);

	console.log(posts.posts); // array-ul care contine toate postarile

	return (
		<div className="blog-page">
			{posts.posts.map((post) => {
				// obiectul post contine informatiile principale
				return (
					<div key={post._id} className="post">
						<p>Data: {post.date}</p>
						<p>Nume imagine: {post.image}</p>
						<p>Titlu: {post.title}</p>
						<p>Nume video: {post.video}</p>

						<Link
							onClick={() => {
								store.dispatch(loadPost(post._id));
							}}
							to={`/blog/${post._id}`}
						>
							Vezi mai mult
						</Link>

						{ /* obiectul p contine subtitlurile si paragrafele */ }
							<div key={post.content._id}>
								<p>firstParagraph: {post.content.firstParagraph}</p>
								<p>firstSubtitle: {post.content.firstSubtitle}</p>
								<p>secondParagraph: {post.content.secondParagraph}</p>
								<p>secondSubtitle: {post.content.secondSubtitle}</p>
								<p>thirdParagraph: {post.content.thirdParagraph}</p>
								<p>thirdSubtitle: {post.content.thirdSubtitle}</p>
							</div>
						
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { loadPosts, loadPost })(BlogPage);
