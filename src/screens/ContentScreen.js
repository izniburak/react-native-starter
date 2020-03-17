import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'

import withAppContext from '../contexts/app/withAppContext'

import View from '../components/base/View'
import Text from '../components/base/Text'

function ContentScreen({ context }) {
  const { state } = context

  return (
    <View as={SafeAreaView} flex={1} p={16}>
      <Text fontSize={19}>Content Screen</Text>
      <Text fontSize={15} mt={10} color="textMedium">
        Context Value: {state.status}
      </Text>
    </View>
  )
}

export default withAppContext(ContentScreen)
