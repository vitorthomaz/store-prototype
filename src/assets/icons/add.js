import * as React from 'react';

function Add(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

export default Add;
