import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ExternalLink from './';
import { Github } from '../../assets/icons';

const data = {
  text: 'TestCall',
  site: 'https://www.google.com.br',
  icon: Github
};

describe('Tests for <ExternalLink />', () => {
  afterEach(cleanup);

  it('should render correctly with an icon', () => {
    render(<ExternalLink text={data.text} site={data.site} icon={data.icon} />);

    expect(screen.queryByTestId('link-icon')).toBeInTheDocument();
    expect(screen.queryByText(/testcall/i)).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeInTheDocument();
  });

  it('should render correctly without an icon', () => {
    render(<ExternalLink text={data.text} site={data.site} />);

    expect(screen.queryByTestId('link-icon')).not.toBeInTheDocument();
    expect(screen.queryByText(/testcall/i)).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeInTheDocument();
  });
});
