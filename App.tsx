import React from 'react';
import { Button, Text, View } from 'react-native';
import Label from './src/components/Label';

function App(): JSX.Element {

  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 40,
          color: 'red',
        }}>
        Hello World
      </Text>
      <Text style={{marginBottom: 10}}>
        React-Native
      </Text>
      <Button title='Click me'/>

      <Label>Welcome !</Label>

    </View>
  );
}

export default App;
