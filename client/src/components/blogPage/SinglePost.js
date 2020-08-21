import React, { useEffect, useState, Fragment } from 'react';
import { Player } from 'video-react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPost } from '../../actions/post';
import store from '../../store/store';
import './blog-page.scss';

const SinglePost = (props) => {
	useEffect(() => {
		store.dispatch(loadPost(props.match.params.id));
	}, []);

	const post = props.currentPost;
	let content = {};

	if (post.content == undefined) {
		console.log('wait');
	} else {
		content = { ...post.content };
	}
  console.log(post.image);

	// console.log(content.firstParagraph);

	// console.log(post);
	return (
		<div key={post._id} className="post">
			<p>Data: {post.date}</p>
			<p>Nume imagine: {post.image}</p>
			<p>Titlu: {post.title}</p>
			<p>Nume video: {post.video}</p>

			{/* render img if exists*/
			post.image == undefined ? <p>no img</p> : <img src={`/file/${post.image}`} />}

			{/* render vid if exists */
			post.video == undefined ? <p>no video</p> : <Player className="video-player" playsInline src={`/file/${post.video}`} /> }

			<div>
				<p>firstParagraph: {content.firstParagraph}</p>
				<p>firstSubtitle: {content.firstSubtitle}</p>
				<p>secondParagraph: {content.secondParagraph}</p>
				<p>secondSubtitle: {content.secondSubtitle}</p>
				<p>thirdParagraph: {content.thirdParagraph}</p>
				<p>thirdSubtitle: {content.thirdSubtitle}</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({ currentPost: state.posts.currentPost });

export default connect(mapStateToProps, { loadPost })(SinglePost);
