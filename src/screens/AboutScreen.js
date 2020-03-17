import React from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import withAppContext from '../contexts/app/withAppContext'

import View from '../components/base/View'
import Text from '../components/base/Text'

function AboutScreen({ context }) {
  const { state } = context

  // in order to handle Screen Changes on react-natigation (for example)
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, []),
  )

  return (
    <View as={SafeAreaView} flex={1} bg="#e1e1e1">
      <View justifyContent="center" flex={1} alignItems="center">
        <Text fontSize={19} p={16}>
          About Screen
        </Text>
        <Text fontSize={15} mt={10} color="textMedium">
          Context Value: {state.status}
        </Text>
      </View>
    </View>
  )
}

export default withAppContext(AboutScreen)
