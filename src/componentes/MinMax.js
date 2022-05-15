import React from 'react'
import {Text} from 'react-native'

import Style from './style'

export default (param) => {
    console.warn(param)
    return (
        <Text style={Style.fontG}>
            Um é maior que zero
        </Text>
    )
}