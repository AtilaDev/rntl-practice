import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  uppercase?: boolean;
  onPress: () => void;
};

export const Button = ({ title, uppercase = true, onPress }: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole='button'
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.touchable}
    >
      <Text style={styles.text}>{uppercase ? title.toUpperCase() : title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#fff',
  },
  touchable: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    borderRadius: 10,
  },
});
