// ProfileScreen.js
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLinkGitHubAccount = () => {
    navigation.navigate('GitHubLink');
  };

  return (
    <View>
      {profile ? (
        <View>
          <Text>Name: {profile.name}</Text>
          <Text>Username: {profile.login}</Text>
          <Text>Bio: {profile.bio}</Text>
          {/* Add more profile info here */}
          <Button
            title="Link GitHub Account"
            onPress={handleLinkGitHubAccount}
          />
        </View>
      ) : (
        <Text>Loading profile...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
