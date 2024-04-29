import React from 'react';

import { Post } from '../../components/post/post.component';
import { usePosts } from '../../hooks/posts.hook';

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
