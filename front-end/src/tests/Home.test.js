import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste Home',   () => {
  test('Verifica Boas-vindas', () => {
    renderWithRouter(<App />);

    expect(screen.getByText(/Boas-vindas/i)).toBeTruthy();
  });

  test('Verifica Botão', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  test('Verifica se Botão redireciona', () => {
    renderWithRouter(<App />);

    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(screen.getByText(/Pesquisa/i)).toBeTruthy()
  })
})