import React from 'react';
import { TouchableOpacity, Text, ImageBackground, View } from 'react-native';

function App(): JSX.Element {
  return (
    <ImageBackground
      source={require('./src/Background.png')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <TouchableOpacity
        onPress={() => alert("Let's get started!")}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FA7E52', // Set the background color of the button
          borderRadius: 100, // Set the border radius of the button
          paddingVertical: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ color: 'black', fontSize: 22 , fontWeight: 'bold' }}>Let's Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default App;
