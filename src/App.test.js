import React from 'react';
import { render } from '@testing-library/react';
import Index from './layouts/App';

test('renders learn react link', () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
