/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { WebView } from 'react-native-webview';

function App(): JSX.Element {
  return (
    <WebView 
    onLoad={onLoad}
    onLoadStart={onLoadStart}
    onLoadProgress={(e) => console.log('progress', e.nativeEvent.progress)}
    onLoadEnd={onLoadEnd}
    source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />
  );
} 
function onLoad() {
  console.log("on Load")
}
function onLoadStart() {
  console.log("on Load Start")
}
function onLoadProgress() {
  console.log("on Load Progress")
}
function onLoadEnd() {
  console.log("on Load Ended")
}

export default App;
