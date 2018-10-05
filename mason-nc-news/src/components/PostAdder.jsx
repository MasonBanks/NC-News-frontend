import React from 'react';
import { Link } from 'react-router-dom';

const PostAdder = () => {
  return (
    <div>
      <Link className="post-link" to="/nc/submit" >Create Post</Link>
    </div>
  );
}

export default PostAdder;