const mobile = '562px';
const tablet = '1024px';

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
