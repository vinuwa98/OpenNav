// App.tsx

import React from 'react';
import { Alert, ImageSourcePropType } from 'react-native';
import CustomImageBackground from './src/components/CustomImageBackground';
import BackgroundButton from './src/components/BackgroundButton';

// Import the Undraw image
const UndrawImage: ImageSourcePropType = require('./src/RoadSign.png');

function App(): JSX.Element {
  return (
    <CustomImageBackground source={require('./src/Background.png')} undrawImage={UndrawImage}>
      <BackgroundButton onPress={() => Alert.alert("Let's get started!")} title="Let's Get Started" />
    </CustomImageBackground>
  );
}

export default App;
