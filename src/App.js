import React from 'react'
import {View, StyleSheet} from 'react-native'

import Primeiro from './componentes/Primeiro' 
import CompPadrao, {Comp1, Comp2} from './componentes/Multi'
import MinMax from './componentes/MinMax'
import Aleatorio from './componentes/Random'

export default () => { 
    <View>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        {/*<MinMax/>
        <CompPadrao/>
        <Primeiro/>*/}
    </View>
}

const style = StyleSheet.create({
    App: {
        backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})