/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Text, TextInput, Image } from 'react-native';

function App(props : any): JSX.Element {

    return (
        <>
            <Image
                source={{
                    uri: props.imgUrl
                }}
                style={{ width: 600, height: 200 , flex:1 }}
            />
            <TextInput
                style={{ flex:1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onEndEditing={text => text.nativeEvent.text === props.name ? props.changeLevel() :  console.log(text.nativeEvent.text + "Wrong answer"+ props.name)}
            />
        </>
    );
}

export default App;
