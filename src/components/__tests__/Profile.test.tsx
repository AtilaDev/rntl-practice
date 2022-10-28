import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../Profile';

describe('Profile component', () => {
  const setup = () => render(<Profile value='Pancho' />);

  test('01 - Should render "Pancho"', () => {
    const { getByText } = setup();

    const profileEl = getByText('Pancho');
    expect(profileEl).toBeDefined();
  });
});
