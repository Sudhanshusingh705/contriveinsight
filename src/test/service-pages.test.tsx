import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import DigitalEngineeringPage from '../pages/DigitalEngineeringPage';

describe('service pages', () => {
  it('renders the digital engineering content from the blueprint', () => {
    render(
      <MemoryRouter>
        <DigitalEngineeringPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Digital Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Build Digital Products/i)).toBeInTheDocument();
  });
});
