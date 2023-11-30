// App.tsx

import React from 'react';
import { Alert } from 'react-native';
import CustomImageBackground from './src/components/CustomImageBackground';
import BackgroundButton from './src/components/BackgroundButton';

function App(): JSX.Element {
  return (
    <CustomImageBackground source={require('./src/Background.png')}>
      <BackgroundButton onPress={() => Alert.alert("Let's get started!")} title="Let's Get Started" />
    </CustomImageBackground>
  );
}

export default App;
