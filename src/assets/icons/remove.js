import * as React from 'react';

function Remove(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 13H5v-2h14v2z" fill="white" />
    </svg>
  );
}

export default Remove;
