import React from 'react';
import { View } from 'react-native';
import BarcodeScanner from './components/BarcodeScanner';
import Header from './components/Header';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <BarcodeScanner />
    </View>
  );
}
