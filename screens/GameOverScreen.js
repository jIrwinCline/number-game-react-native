import React from 'react'
import { View, Text, StylesSheet } from 'react-native'

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
        </View>
    )
}

const styles = StylesSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen
