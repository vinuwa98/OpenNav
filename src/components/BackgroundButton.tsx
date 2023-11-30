// src/components/BackgroundButton.tsx

// Import necessary React components from 'react-native'
import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

// Define the props interface for the BackgroundButton component
interface BackgroundButtonProps {
  onPress: (event: GestureResponderEvent) => void; // Function to be executed on button press
  title: string; // Text to be displayed on the button
}

// BackgroundButton component function
function BackgroundButton({ onPress, title }: BackgroundButtonProps): JSX.Element {
  return (
    // TouchableOpacity provides a touchable area, and onPress is triggered on touch
    <TouchableOpacity
      onPress={onPress} // Event handler passed from parent component
      style={{
        alignItems: 'center', // Center aligns content horizontally
        justifyContent: 'center', // Center aligns content vertically
        backgroundColor: '#FA7E52', // Background color of the button
        borderRadius: 100, // Border radius for rounded corners
        paddingVertical: 15, // Vertical padding within the button
        paddingHorizontal: 30, // Horizontal padding within the button
      }}
    >
      {/* Text component for displaying the title with specified styles */}
      <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
}

// Export the BackgroundButton component as the default export
export default BackgroundButton;
