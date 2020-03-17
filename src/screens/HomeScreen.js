import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'

import View from '../components/base/View'
import Button from '../components/base/Button'
import Text from '../components/base/Text'

import app from '../constants/app'

function HomeScreen({ navigation }) {
  return (
    <View as={SafeAreaView} flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={15} color="textMedium">
        {app.name}
      </Text>
      <Text fontSize={19}>Hello React Native World!</Text>
      <Button
        bg="red"
        p={10}
        mt={10}
        onPress={() => navigation.navigate('Content', { title: 'Content Page' })}
      >
        <Text color="white">Go to Content Page</Text>
      </Button>
    </View>
  )
}

export default HomeScreen
