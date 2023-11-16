import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductsFetch from './Products';

describe('Render Product component', () => {
  it('should render the Product component', () => {
    render(<ProductsFetch/>)
  })
})

describe('Products Component', () => {
  it('should have a heading stating products', () => {
    render(<ProductsFetch />);
    const heading = screen.getByRole('heading', '/Products/i');
    expect(heading).toBeInTheDocument();
  });
})

