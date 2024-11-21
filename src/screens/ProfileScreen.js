// ProfileScreen.js
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const [profile, setProfile] = useState(null);


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
