// HomeScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSearch = () => {};

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default HomeScreen;
