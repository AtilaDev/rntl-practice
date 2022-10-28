import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button component', () => {
  const mockFn = jest.fn();

  const setup = (uppercase: boolean) =>
    render(<Button onPress={mockFn} title='Press me' uppercase={uppercase} />);

  test('01 - Should be rendered', () => {
    const { getByRole } = setup(true);

    const buttonEl = getByRole('button');
    expect(buttonEl).toBeDefined();
  });

  test('02 - Should render "PRESS ME" into button', () => {
    const { getByText } = setup(true);

    const buttonEl = getByText('PRESS ME');
    expect(buttonEl).toBeDefined();
  });

  test('03 - Should trigger a function when press on it', () => {
    const { getByRole } = setup(true);

    const buttonEl = getByRole('button');
    fireEvent.press(buttonEl);
  });

  test('04 - Should render "Press me" text', () => {
    const { getByText } = setup(false);

    const buttonEl = getByText('Press me');
    fireEvent.press(buttonEl);
  });
});
