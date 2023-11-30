// src/components/CustomImageBackground.tsx

import React, { ReactNode } from 'react';
import { ImageBackground, View, ImageSourcePropType, StyleSheet } from 'react-native';
import UndrawImage from './UndrawImage';
import BackgroundButton from './BackgroundButton';

interface CustomImageBackgroundProps {
  source: ImageSourcePropType;
  undrawImage: any;
  children?: ReactNode;
}

function CustomImageBackground({ source, undrawImage, children }: CustomImageBackgroundProps): JSX.Element {
  return (
    <ImageBackground
      source={source}
      style={styles.background}
    >
      <View style={styles.container}>
        <UndrawImage image={undrawImage} style={styles.image} />
        <BackgroundButton onPress={() => console.log("Let's get started!")} title="Let's Get Started" style={styles.button} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 380,
    height: 380,
    marginBottom: 100
  },
  button: {
    marginTop: 50,
    // Add any additional styling for the button here
  },
});

export default CustomImageBackground;
