import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'

import View from '../components/base/View'
import Text from '../components/base/Text'

function ContentScreen() {
  return (
    <View as={SafeAreaView} flex={1} p={16}>
      <Text fontSize={19}>Content Screen</Text>
    </View>
  )
}

export default ContentScreen
