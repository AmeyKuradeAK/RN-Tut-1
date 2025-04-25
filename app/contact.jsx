import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.card}>Contact Page</Text>

      <Link style={styles.link} href="/">Home Page</Link>  
    </View>
  )
}

export default Contact

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
    },
    link: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: 5,
    }
})