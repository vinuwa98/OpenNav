import { View, Text } from 'react-native'
import React from 'react'

const Label = (props:any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          color: 'yellow'
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default Label;