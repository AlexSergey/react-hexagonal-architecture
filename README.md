# React Hexagonal Architecture

## Intro

This repository was created in order to develop the idea of forming an architecture using the React framework. In the
modern React development approach, it is very difficult to comply with clean code standards and build an architecture
for a large, extensible application.

## Description of the approach

*Robert Martin*, in his book **Clean Architecture**, wrote that the framework should not dictate the conditions for building
and designing architecture. The framework is only part of the implementation. Therefore, to implement the current
approach, several practices were chosen that were capable of separating business logic from React code and making these
2 parts independent.

One of the most important steps in developing a good architecture is DI. To implement DI in React, there is a mechanism
out of the box - **Context**.

**di-container.tsx** - we set the dependencies that our components will use.
In this example, the dependency is the repository. This will allow you to mock the repository in the future and use the
code for testing:

```tsx
export interface IDiContainer {
  postsRepository: IPostsRepository;
}

export const di = {
  postsRepository: new PostsRepository(),
};
export const DIContext = createContext<IDiContainer>(di);
```

The features folder contains the business logic of the application, which is in no way related to the framework. This
approach uses Hexagonal Architecture. The main element is the **use case** - this is the part of the business logic that is
used in the application. In this case, the **use case** will receive data from the backend and transform it for output using
auxiliary services:

```tsx
export const fetchPostsUseCase = async (postsRepository: IPostsRepository): Promise<IPostViewModel[]> => {
  const posts: IPost[] = await postsRepository.getAllPosts();

  return posts.map((post) => ({
    contentSnippet: `${post.body.substring(0, 100)}...`,
    readingTime: calculateReadingTime(post.body),
    title: post.title,
  }));
};
```

Next, this data needs to be associated with the framework.

For these purposes, the React hook is used - **posts.hook.ts**:

```tsx
export const usePosts = (): IPostViewModel[] => {
  const [posts, setPosts] = useState<IPostViewModel[]>([]);
  const { postsRepository } = useContext<IDiContainer>(DIContext);
  useEffect(() => {
    fetchPostsUseCase(postsRepository)
      .then((p) => setPosts(p));
  }, [postsRepository]);

  return posts;
};
```

In this hook, a **use case** is called and connected to the React state.

When the data is received and transferred to the state, we can create a React layout. For this we use the **Containers**
approach. A **container** is a smart component that receives data and delegates displaying that data to dumb components like
**post.component.tsx**:

```tsx
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
```

## Conclusion

Using different approaches and architectural patterns, we achieved complete separation of business logic and framework,
and also made the code testable using DI.
