import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Spacer } from '../Spacer';

describe('Spacer component', () => {
  const setup = () => render(<Spacer />);

  test('01 - Should render Spacer', () => {
    const { getByTestId } = setup();
    const spacerEl = getByTestId('spacer');
    expect(spacerEl).toBeDefined();
  });
});
