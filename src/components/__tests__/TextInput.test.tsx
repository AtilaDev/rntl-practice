import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from '../TextInput';

describe('TextInput component', () => {
  const mockFn = jest.fn();

  const setup = () =>
    render(
      <TextInput label={'Name'} onChangeText={mockFn} placeholder='Carlitos' />
    );

  test('01 - Should render', () => {
    const { getByText } = setup();

    const textInputEl = getByText('Name');
    expect(textInputEl).toBeDefined();
  });

  test('02 - Should change value if enter new text', () => {
    const { getByRole, debug } = setup();

    const textInputEl = getByRole('text');
    fireEvent.changeText(textInputEl, 'Pancho');
    expect(mockFn).toHaveBeenCalledWith('Pancho');
  });

  test('03 - Should see the placeholder: "Carlitos" if TextInput is empty', () => {
    const { getByRole, getByPlaceholderText } = setup();

    const textInputEl = getByRole('text');
    fireEvent.changeText(textInputEl, '');
    const placeholder = getByPlaceholderText('Carlitos');
    expect(placeholder).toBeDefined();
  });
});
