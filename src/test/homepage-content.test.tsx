import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Index from '../pages/Index';

describe('homepage content', () => {
  it('renders the updated business messaging', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    expect(screen.getByText(/Technology That Helps Businesses Grow/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/OTT Platform/i)).toBeInTheDocument();
  });
});
