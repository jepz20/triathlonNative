import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

export default function Jstepper ({ date }) {
  return (
    <Text style={styles.text}>
      {date}
    </Text>
  )
}

const styles = StyleSheet.create({
	text: {
		color: purple,
		fontSize: 25,
	}
})