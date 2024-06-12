// GitHubLinkScreen.js
import React from 'react';
import { View, Button, Linking } from 'react-native';

const GitHubLinkScreen = () => {
  const handleLinkGitHubAccount = () => {
    // Redirect to server route for GitHub OAuth
    Linking.openURL('http://localhost:3000/auth/github');
  };

  return (
    <View>
      <Button title="Link GitHub Account" onPress={handleLinkGitHubAccount} />
    </View>
  );
};

export default GitHubLinkScreen;
