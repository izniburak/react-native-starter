import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'

import withAppContext from '../contexts/app/withAppContext'
import app from '../constants/app'

import View from '../components/base/View'
import Button from '../components/base/Button'
import Text from '../components/base/Text'

function HomeScreen({ navigation, context }) {
  const { state, dispatch, actions } = context

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

      <View mt={30} alignItems="center">
        <Text fontSize={15}>Context: {state.status}</Text>
        <Button
          bg="gray"
          p={5}
          mt={5}
          onPress={() =>
            dispatch(
              actions.appStatus(
                actions.APP_STATUS_TYPE.SUCCESS === state.status
                  ? actions.APP_STATUS_TYPE.LOADING
                  : actions.APP_STATUS_TYPE.SUCCESS,
              ),
            )
          }
        >
          <Text color="white">Change State</Text>
        </Button>
      </View>
    </View>
  )
}

export default withAppContext(HomeScreen)
