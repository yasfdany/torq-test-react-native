import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import GS from '../../constants/globalStyles'
import Colors from '../../constants/colors'

const ItemSimilarCar = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.push("DetailCarScreen",{car: props.car})
        }}>
            <View style={[
                GS.column, 
                GS.crossCenter,
                props.style,
                {
                    width: 180,
                    backgroundColor: 'white', 
                    elevation: 12, 
                    borderRadius: 24,
                    padding: 18,
                }
            ]}>
                <View style={[GS.row, GS.spaceBetween, GS.crossCenter, {width: '100%'}]}>
                    <View style={{
                        backgroundColor: "#fabf5e", 
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 12,
                    }}>
                        <Text style={GS.white12}>{props.car?.body_type}</Text>
                    </View>
                    <Text style={GS.black12}>{"¥"+props.car?.msrp}</Text>
                </View>
                <Image style={styles.carImage} source={{ uri: props.car.image_url }}/>
                <View style={[GS.column, {width: '100%', marginTop: 12}]}>
                    <Text style={[GS.black14, GS.bold]}>{props.car.model}</Text>
                    <Text style={[GS.black12]}>{props.car.version}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    carImage: {
        marginTop: 12,
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        paddingHorizontal: 14,
    },
})

export default ItemSimilarCar