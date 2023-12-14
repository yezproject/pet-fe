import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Text from '@/components/Text.jsx';

describe('App', () => {
  it('Vite to be in document', () => {
    render(<Text />);
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });
});
