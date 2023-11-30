// src/components/UndrawImage.tsx

import React from 'react';
import { Image, View, ImageStyle } from 'react-native';

interface UndrawImageProps {
  image: any;
  style?: ImageStyle; // Use ImageStyle for styling the image
}

function UndrawImage({ image, style }: UndrawImageProps): JSX.Element {
  return (
    <View>
      <Image source={image} style={{ ...defaultStyles.image, ...style}} />
    </View>
  );
}

const defaultStyles = {
  image: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
};

export default UndrawImage;
