import React from 'react';

const Blog = () => {
    return (
      <div className="m-20 px-20">
        <h1>
          <span className="font-semibold text-xl">Context API:</span> The
          Context API is a feature in React that allows you to manage the global
          state and share data between components without the need to pass props
          through every level of the component tree. It provides a way to pass
          data down to child components without having to pass props explicitly
          at every level, making it easier to manage and share state across
          different parts of your application.
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold text-xl">custom hook:</span> custom
          hook is a special JavaScript function whose name starts with 'use' and
          can be used to call other hooks. A custom hook does not require a
          specific signature. A software developer can choose what argument the
          custom hook has and what should the argument return. A custom hook
          always starts with the name
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold text-xl">useRef:</span> The useRef hook
          is the new addition in React 16.8. Before proceeding to this article
          there is a prerequisite to know about the ref in react. The useRef is
          a hook that allows to directly create a reference to the DOM element
          in the functional component.
        </h1>
        <h1 className="mt-5">
          <span className="font-semibold text-xl">usememo:</span> React has a
          built-in hook called useMemo that allows you to memoize expensive
          functions so that you can avoid calling them on every render. You
          simple pass in a function and an array of inputs and useMemo will only
          recompute the memoized value when one of the inputs has changed.
        </h1>
      </div>
    );
};

export default Blog;