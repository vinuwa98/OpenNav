// src/components/BackgroundButton.tsx

import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, ViewStyle } from 'react-native';

interface BackgroundButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: ViewStyle; // Use ViewStyle for styling the button container
}

function BackgroundButton({ onPress, title, style }: BackgroundButtonProps): JSX.Element {
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
        marginTop: 80
      }}
    >
      <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default BackgroundButton;
