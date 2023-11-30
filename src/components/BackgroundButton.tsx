// src/components/BackgroundButton.tsx

import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

interface BackgroundButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

function BackgroundButton({ onPress, title }: BackgroundButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FA7E52',
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 30,
      }}
    >
      <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default BackgroundButton;
