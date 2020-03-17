import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Navigation Routes
import Routes from './routes'

// Theme
import theme from './themes/default'

StatusBar.setBarStyle('dark-content')

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
