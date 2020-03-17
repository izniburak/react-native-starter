import { View as V } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, border, flexbox, borderRadius } from 'styled-system'

const View = styled(V)(compose(flexbox, space, border, color, size, borderRadius))

export default View
