import React from 'react'
import {View, Text} from 'react-native'
import Style from './style'

export default props =>{

    return(
        <View>
            <Text style={Style.txtG}>(props.principal)</Text>
            <Text>{props.secundario}</Text>
        </View>
    )
}