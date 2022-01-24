import React, {useState} from 'react'
import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

const TitleSection = (props) => {
    return (
        <View style={[GS.row, props.style]}>
            <Text style={[GS.black14, {width: "45%"}]}>{props.title}</Text>
            <Text style={[GS.black14, {color: Colors.primary}]}>{props.value}</Text>
        </View>
    )
}

export default TitleSection