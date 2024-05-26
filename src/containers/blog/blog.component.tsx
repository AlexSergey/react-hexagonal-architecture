import React from 'react';

import { usePosts } from '../../api/framework/posts/posts.hook';
import { Post } from '../../components/post/post.component';

export const BlogComponent: React.FC = () => {
  const posts = usePosts();

  return (
    <div className="my-blog">
      {posts.map((post) => {
        return <Post {...post} key={post.title} />;
      })}
    </div>
  );
};
