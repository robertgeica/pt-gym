import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import store from '../../store/store';

import { loadPosts, addPost, deletePost } from '../../actions/post';

const Post = ({ posts }) => {

	useEffect(() => {
		store.dispatch(loadPosts());
	}, []);

	const [postForm, setPostForm] = useState({
		image: '',
		video: '',
		title: '',
		content: []
	});

	const [postContent, setPostContent] = useState({});

	const handleChange = text => e => {
		const checkIfMatch = ['firstSubtitle', 'secondSubtitle', 'thirdSubtitle', 'firstParagraph', 'secondParagraph', 'thirdParagraph'];

		if(checkIfMatch.includes(text)) {
			setPostContent({...postContent, [text]: e.target.value});
		} else {
			setPostForm({...postForm, [text]: e.target.value});

		}


	}

	const handleSubmit = e => {
		e.preventDefault();
		
		console.log('postform', postForm);
		console.log('postcontent', postContent);
		const post = postForm;
		post.content.push(postContent);


		console.log(post);
		store.dispatch(addPost(post));

	}

	return (
		<div>
			<h3> Adaugare postare </h3>
			<form className="add-post" onSubmit={e => handleSubmit(e)}>
				<p>image url</p>
				<input type="text" palceholder="image url" onChange={handleChange('image')}/>
				<p>video url</p>
				<input type="video" palceholder="video url" onChange={handleChange('video')}/>
				<p>titlu</p>
				<input type="title" palceholder="title" onChange={handleChange('title')}/>

				<p>subtitlu1</p>
				<input type="firstSubtitle" palceholder="firstSubtitle" onChange={handleChange('firstSubtitle')}/>
				<p>paragraf1</p>
				<input type="firstParagraph" palceholder="firstParagraph" onChange={handleChange('firstParagraph')}/>
				<p>subtitlu2</p>
				<input type="secondSubtitle" palceholder="secondSubtitle" onChange={handleChange('secondSubtitle')}/>
				<p>paragraf2</p>
				<input type="secondParagraph" palceholder="secondParagraph" onChange={handleChange('secondParagraph')}/>
				<p>subtitlu3</p>
				<input type="thirdSubtitle" palceholder="thirdSubtitle" onChange={handleChange('thirdSubtitle')}/>
				<p>paragraf3</p>
				<input type="thirdParagraph" palceholder="thirdParagraph" onChange={handleChange('thirdParagraph')}/>

				<button type="submit">Add</button>
			</form>





			<h3> Postarile mele </h3>
			{posts.map((post) => {
				return (
					<div className="post" key={post._id}>
						<div onClick={e => store.dispatch(deletePost(post._id))}>delete</div>
						
						<img className="upload-img" src={`http://localhost:4000/file/${post.image}`} />

						<h1>{post.title}</h1>

								<h2>first s: {post.content[0].firstSubtitle}</h2>
								<p>first p: {post.content[0].firstParagraph}</p>

						
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
