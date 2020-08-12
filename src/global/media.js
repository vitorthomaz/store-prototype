const media = {
  mobile: '562px',
  tablet: '1024px'
};

export default media;

import { theme } from '../global';

const mobile = theme.media.mobile;
const tablet = theme.media.tablet;

export const whenMobile = style => `
  @media screen and (max-width: ${mobile}) {
    ${style}
  }
`;

export const whenTablet = style => `
  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    ${style}
  }
`;
