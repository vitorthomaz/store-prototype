import * as React from 'react';

function Logo(props) {
  return (
    <svg viewBox="0 0 24 24" width={48} height={48} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"
        fill="white"
      />
    </svg>
  );
}

export default Logo;
