// RegisterScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        email,
        password,
      });
      console.log('User registered successfully:', response.data);
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={{textAlign: 'center', marginTop: 30, marginBottom: 10}}>
        Have an account already? then tap Login
      </Text>
      <TouchableOpacity
        style={{alignSelf: 'center', padding: 10}}
        onPress={onPressLogin}>
        <Text style={{color: 'blue'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
