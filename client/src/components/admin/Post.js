import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Upload from './Upload';

import { connect } from 'react-redux';
import store from '../../store/store';

import { loadPosts, addPost, deletePost } from '../../actions/post';

const Post = ({ posts }) => {
	useEffect(() => {
		store.dispatch(loadPosts());
	}, []);

	const [ postForm, setPostForm ] = useState({
		image: '',
		video: '',
		title: '',
		content: {}
	});

	const [ postContent, setPostContent ] = useState({});

	const handleChange = (text) => (e) => {
		const checkIfMatch = [
			'firstSubtitle',
			'secondSubtitle',
			'thirdSubtitle',
			'firstParagraph',
			'secondParagraph',
			'thirdParagraph'
		];

		if (checkIfMatch.includes(text)) {
			setPostContent({ ...postContent, [text]: e.target.value });
		} else {
			setPostForm({ ...postForm, [text]: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('postform', postForm);
		console.log('postcontent', postContent);
		const post = postForm;
		post.content = postContent;

		console.log(post);
		store.dispatch(addPost(post));
	};

	return (
		<div className="post-container">
			<Upload />
			<form className="add-post" onSubmit={(e) => handleSubmit(e)}>
			<h3> Adaugare postare </h3>
				<span>
					<input
						className="basic-slide"
						id="image"
						placeholder="image url"
						type="text"
						onChange={handleChange('image')}
					/>
					<label for="image">image url</label>
				</span>

				<span>
					<input
						className="basic-slide"
						type="video"
						id="video"
						placeholder="video url"
						onChange={handleChange('video')}
					/>
					<label for="video">video url</label>
				</span>

				<span>
					<input
						className="basic-slide"
						type="text"
						id="title"
						placeholder="title"
						onChange={handleChange('title')}
					/>
					<label for="title">titlu</label>
				</span>

				<span>
					<input
						className="basic-slide"
						type="text"
						id="firstSubtitle"
						placeholder="firstSubtitle"
						onChange={handleChange('firstSubtitle')}
					/>
					<label for="firstSubtitle">subtitlu 1</label>
				</span>


				<span>
					<input
						className="basic-slide"
						type="text"
						id="firstParagraph"
						placeholder="firstParagraph"
						onChange={handleChange('firstParagraph')}
					/>
					<label for="firstParagraph">paragraf 1</label>
				</span>
				<span>
					<input
						className="basic-slide"
						type="text"
						id="secondSubtitle"
						placeholder="secondSubtitle"
						onChange={handleChange('secondSubtitle')}
					/>
					<label for="secondSubtitle">subtitlu 2</label>
				</span>
				<span>
					<input
						className="basic-slide"
						type="text"
						id="secondParagraph"
						placeholder="secondParagraph"
						onChange={handleChange('secondParagraph')}
					/>
					<label for="secondParagraph">paragraf 2</label>
				</span>
				<span>
					<input
						className="basic-slide"
						type="text"
						id="thirdSubtitle"
						placeholder="thirdSubtitle"
						onChange={handleChange('thirdSubtitle')}
					/>
					<label for="thirdSubtitle">subtitlu 3</label>
				</span>
				<span>
					<input
						className="basic-slide"
						type="text"
						id="thirdParagraph"
						placeholder="thirdParagraph"
						onChange={handleChange('thirdParagraph')}
					/>
					<label for="thirdParagraph">paragraf 3</label>
				</span>

				<br />
				<button className="btn" type="submit">Add</button>
			</form>

			{posts.map((post) => {
				return (
					<div className="post" key={post._id}>
						<div onClick={(e) => store.dispatch(deletePost(post._id))}>delete</div>

						<img className="upload-img" src={`http://localhost:4000/file/${post.image}`} />

						<h1>{post.title}</h1>

						{
							post.content.firstSubtitle == undefined ?
							'' : <h2>first s: {post.content.firstSubtitle}</h2>
						}
						
					</div>
				);
			})}
		</div>
	);
};

Post.propTypes = {};

const mapStateToProps = (state) => ({
	posts: state.posts.posts
});

export default connect(mapStateToProps)(Post);
