import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Home = () => (
  <View style={styles.content}>
    <Text>{'Hello world'}</Text>
  </View>
)

export default Home
