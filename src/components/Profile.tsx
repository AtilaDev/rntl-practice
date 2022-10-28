import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  value: string;
};

export const Profile = ({ value }: Props) => {
  return (
    <View style={styles.container} accessibilityRole='text'>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 26,
  },
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
