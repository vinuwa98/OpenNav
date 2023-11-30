// App.tsx

// Import necessary React components from 'react-native'
import React from 'react';
import { Alert } from 'react-native';
import CustomImageBackground from './src/components/CustomImageBackground';
import BackgroundButton from './src/components/BackgroundButton';

// Define the App component
function App(): JSX.Element {
  return (
    // CustomImageBackground component provides a background image
    <CustomImageBackground source={require('./src/Background.png')}>
      {/* BackgroundButton component renders a button on top of the background */}
      <BackgroundButton
        onPress={() => Alert.alert("Let's get started!")} // Display an alert on button press
        title="Let's Get Started" // Text to be displayed on the button
      />
    </CustomImageBackground>
  );
}

// Export the App component as the default export
export default App;
