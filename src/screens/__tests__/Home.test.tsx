import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../Home';

test('Home should render OK', () => {
  const { getByRole, getByText, getByPlaceholderText, debug } = render(
    <Home />
  );

  const textInputEl = getByText('Name');
  const buttonEl = getByRole('button', { name: /Press me/i });
  const buttonClear = getByRole('button', { name: /Clear all/i });

  fireEvent.changeText(textInputEl, 'testing home');
  fireEvent.press(buttonEl);

  const profileEl = getByText('testing home');
  expect(profileEl).toBeDefined();

  fireEvent.press(buttonClear);
  const placeholderText = getByPlaceholderText('Carlitos');
  expect(placeholderText).toBeDefined();

  const profileElClear = getByRole('text', { name: '' });
  expect(profileElClear).toBeDefined();
});
