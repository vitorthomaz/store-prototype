import * as React from 'react';

function Home(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white" />
    </svg>
  );
}

export default Home;
