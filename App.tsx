import React from 'react';
import { Button, ImageBackground, Text, TextInput, View } from 'react-native';
import Label from './src/components/Label';

function App(): JSX.Element {
  return (
    <ImageBackground
      source={require('./src/Background.png')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
        <Text style={{ fontSize: 40, color: 'red' }}>Hello World</Text>
        <Text style={{ marginBottom: 10 }}>React-Native</Text>
        <Button title='Click me' />

        <Label>Welcome!</Label>

        <TextInput style={{ backgroundColor: '#aaa', color: '#000', width: 200 }} />
        <Button title="Let's Get Started" onPress={() => alert("Let's get started!")} />
      </View>
    </ImageBackground>
  );
}

export default App;
