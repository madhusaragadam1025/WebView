import React, { useState } from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import { loadingIndicatorStyle } from './Styles/SplashScreen.styles';
import GameScreen from './Screens/GameScreen';
import { GameManager } from './GameManager/GameManager';

var gameManager = new GameManager();

const App = () => {

  const [appInit, setAppInit] = useState(false); 
  const [level, setLevel] = useState(0);

  if(appInit === false) {
    gameManager.informWhenGameLoaded().then(values => {
      setAppInit(values);  
    });
  }

  const changeLevel = () => {
    if(level <  gameManager.gameModel.length-1) {
      setLevel(level+1);
    } 
  };

  return (
    <View style={[loadingIndicatorStyle.container, loadingIndicatorStyle.horizontal]}>
      {appInit === false && <ActivityIndicator size="large" color="#00ff00" />}
      {appInit === true && <GameScreen style = {{ flex: 1 }} imgUrl={gameManager.gameModel[level].imgUrl} name={gameManager.gameModel[level].name} changeLevel = {changeLevel}></GameScreen>}
    </View>
  );
}

export default App;