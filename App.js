// In your App.js or index.js
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import GitHubLinkScreen from './src/screens/GitHubLinkScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="GitHubLink"
          component={GitHubLinkScreen}
          options={{title: 'Link GitHub Account'}}
        /> */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'GitHub Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
