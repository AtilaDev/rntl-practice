import React from 'react';
import { View } from 'react-native';

type Props = {
  vertical?: number;
};

export const Spacer = ({ vertical = 5 }: Props) => {
  return <View testID='spacer' style={{ marginVertical: vertical }} />;
};
