import React from 'react';
import { TextInput as Input, Text, StyleSheet, View } from 'react-native';

type Props = {
  label: string;
  value?: string;
  placeholder?: string;
  onChangeText: (val: string) => void;
};

export const TextInput = ({
  label,
  value,
  placeholder,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Input
        accessibilityRole='text'
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  label: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    height: 60,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.7)',
  },
});
