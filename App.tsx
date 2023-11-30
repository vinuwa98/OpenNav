// App.tsx

import React from 'react';
import { Alert, ImageSourcePropType } from 'react-native';
import CustomImageBackground from './src/components/CustomImageBackground';
import BackgroundButton from './src/components/BackgroundButton';
import Logo from './src/components/Logo';

// Import the Undraw image and Logo image
const UndrawImage: ImageSourcePropType = require('./src/RoadSign.png');
const LogoImage: ImageSourcePropType = require('./src/Logo.png'); // Update with your actual logo file

function App(): JSX.Element {
  return (
    <CustomImageBackground source={require('./src/Background.png')} undrawImage={UndrawImage}>
      <Logo source={LogoImage} style={styles.logo} />
      <BackgroundButton onPress={() => Alert.alert("Let's get started!")} title="Let's Get Started" style={styles.button} />
    </CustomImageBackground>
  );
}

const styles = {
  logo: {
    marginTop: 20,
    width: 150, // Adjust the width of the logo
    height: 150, // Adjust the height of the logo
  },
  button: {
    marginTop: 20,
  },
};

export default App;
