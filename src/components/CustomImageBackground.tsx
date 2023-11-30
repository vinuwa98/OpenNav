// src/components/CustomImageBackground.tsx

// Import necessary React components from 'react-native'
import React, { ReactNode } from 'react';
import { ImageBackground, View, ImageSourcePropType } from 'react-native';

// Define the props interface for the CustomImageBackground component
interface CustomImageBackgroundProps {
  source: ImageSourcePropType; // Image source for the background
  children?: ReactNode; // Child components to be rendered within the background
}

// CustomImageBackground component function
function CustomImageBackground({ source, children }: CustomImageBackgroundProps): JSX.Element {
  return (
    // ImageBackground provides a background image for its children
    <ImageBackground
      source={source} // Image source passed as a prop
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} // Styles for the ImageBackground component
    >
      {/* View component for centering its children */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>{children}</View>
    </ImageBackground>
  );
}

// Export the CustomImageBackground component as the default export
export default CustomImageBackground;
