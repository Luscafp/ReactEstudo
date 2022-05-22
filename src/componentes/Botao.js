import React from 'react'
import {Button} from 'react-native'

export default props => {

    function executar() {
        console.warn("Exec")
    }

    return (
    <>
          <Button 
        title="Prosseguir"
        onPress={executar}
         />

<Button 
        title="Prosseguir 02"
        onPress={executar}
         />
    </>
        
    )
}