import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import PostDetail from './PostDetail';

class PostList extends Component {
  state = { posts: [] };

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({ posts: response.data }));
  }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostDetail key={post.id} post={post} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderPosts()}
      </ScrollView>
    );
  }
}

export default PostList;
