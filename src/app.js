import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Context
import { Provider, initialState, getReducer } from './contexts/app'

// Navigator
import Navigator from './navigator'

// Theme
import theme from './themes/default'

StatusBar.setBarStyle('dark-content')

// ¯\_(ツ)_/¯
function App() {
  return (
    <Provider initialState={initialState} reducer={getReducer}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
