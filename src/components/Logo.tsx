// src/components/Logo.tsx

import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native';

interface LogoProps {
  source: ImageSourcePropType;
  style?: ImageStyle; // Use ImageStyle for styling the image
}

const Logo: React.FC<LogoProps> = ({ source, style }) => {
  return <Image source={source} style={[styles.logo, style]} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Logo;
