import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '../pages/Home';

test('Teste Boas Vindas', () => {
  render(<Home />)
  const welcome = screen.getByText(/Boas Vindas/i);

  expect(welcome).toBeTruthy()
});