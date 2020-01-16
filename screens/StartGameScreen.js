import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Some text</Text>

        </View>
    )
}

const styles = {
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
}

export default StartGameScreen;