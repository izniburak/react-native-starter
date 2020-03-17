import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from './screens/HomeScreen'
import ContentScreen from './screens/ContentScreen'
import AboutScreen from './screens/AboutScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// Home Screens Stack
function HomeScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerMode: 'none',
          header: () => {},
        }}
      />
      <Stack.Screen name="Content" component={ContentScreen} />
    </Stack.Navigator>
  )
}

// Main Routes
function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreens} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
