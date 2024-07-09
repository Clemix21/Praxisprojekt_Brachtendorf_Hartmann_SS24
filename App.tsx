import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Camera, CameraDevice, CameraProps} from 'react-native-vision-camera';

const App = () => {
  // Definiere hier ein gültiges CameraDevice-Objekt
  const cameraDevice: CameraDevice = {
    id: 'unique-camera-id',
    physicalDevices: [],
    position: 'back',
    name: 'Camera Device',
    hasFlash: true,
    hasTorch: true,
    minFocusDistance: 0,
    isMultiCam: false,
    minZoom: 1,
    maxZoom: 10,
    neutralZoom: 1,
    minExposure: -12,
    maxExposure: 12,
    formats: [],
    supportsLowLightBoost: true,
    supportsRawCapture: false,
    supportsFocus: true,
    hardwareLevel: 'full',
    sensorOrientation: 'portrait',
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} device={cameraDevice} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default App;
