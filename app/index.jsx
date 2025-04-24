import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/splash-icon.png'

const Home = () => {
  return (
    <View style={styles.container}>

        <Image source={Logo} />

      <Text style={styles.title}>Home</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello, This is a card</Text>
      </View>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
})