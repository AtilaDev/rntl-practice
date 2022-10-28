import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Profile, Spacer, TextInput } from '../components';

export default function Home() {
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');

  const handleProfile = () => {
    setProfile(name);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={'Name'}
        onChangeText={setName}
        placeholder='Carlitos'
        value={name}
      />
      <Spacer vertical={10} />
      <Button onPress={handleProfile} title='Press me' />
      <Spacer vertical={10} />
      <Profile value={profile} />
      <Spacer vertical={10} />
      <Button
        onPress={() => {
          setProfile('');
          setName('');
        }}
        title='Clear all'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 25,
    justifyContent: 'center',
  },
});
