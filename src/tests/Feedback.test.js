import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

// const questions = [
//   {
//     questionTitle: "Pessoas na equipe",
//     result: [
//       {type: "1 até 3", value: 5},
//       {type: "4 até 6", value: 3},
//       {type: "7 até 9", value: 3},
//       {type: "10 até 14", value: 2},
//       {type: "15 ou mais", value: 2},
//     ],
//     question: "Quantas pessoas tem a sua equipe?",
//     id: "UziWtqBa0P8ExxMhgIQo"
//   },
// ]

describe('Teste Feedback', () => {
  test('Verifica Titulo', () => {
    renderWithRouter(<App />, {route: '/feedback'});

    expect(screen.getByText(/Pesquisa/i)).toBeTruthy();
  });

  test('Verifica se o Botão está desabilitado', () => {
    renderWithRouter(<App />, {route: '/feedback'});

    expect(screen.getByRole('button')).toBeDisabled();
  });
})