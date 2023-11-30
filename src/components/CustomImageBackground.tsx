// src/components/CustomImageBackground.tsx

import React, { ReactNode } from 'react';
import { ImageBackground, View, ImageSourcePropType } from 'react-native';

interface CustomImageBackgroundProps {
  source: ImageSourcePropType;
  children?: ReactNode;
}

function CustomImageBackground({ source, children }: CustomImageBackgroundProps): JSX.Element {
  return (
    <ImageBackground
      source={source}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>{children}</View>
    </ImageBackground>
  );
}

export default CustomImageBackground;
