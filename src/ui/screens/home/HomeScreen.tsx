import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from "react-redux"
import {ProgressBar} from '@react-native-community/progress-bar-android';
import LinearGradient from 'react-native-linear-gradient';

import GS from '../../../constants/globalStyles'
import Colors from '../../../constants/colors'
import { getCars } from '../../../redux/actions/carActions'
import ItemCar from '../../components/ItemCar'
import {ActionTypes} from '../../../redux/constants/actionTypes'

const HomeScreen = () => {    
    const dispatch = useDispatch()
    const cars = useSelector((state) => state.car.cars)
    const loading = useSelector((state) => state.car.loading)
    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(getCars())
    }, [])

    useEffect(() => {
        dispatch({
            type: ActionTypes.SET_LOADING_CAR,
            payload: {loading: true},
        })
        const delayDebounceFn = setTimeout(() => {
            dispatch(getCars(text))
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [text])

    return (
        <SafeAreaView style={GS.container}>
             <StatusBar
                backgroundColor={Colors.primary}
                barStyle={'light-content'} />
            <View 
                style={[
                    GS.column,
                    {
                        padding: 24,
                        backgroundColor: Colors.primary,
                        borderBottomLeftRadius: 28,
                        borderBottomRightRadius: 28,
                    }]
                }>
                <View style={[GS.row, GS.spaceBetween, GS.crossCenter, {backgroundColor: 'transparent'}]}>
                    <Icon name={"menu"} color={'white'} size={24}/>
                    <Image style={{width: 34, height: 34, borderRadius: 12}} source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'}}/>
                </View>
                <Text style={[GS.white18, GS.bold, {marginTop: 24}]}>Choose a Car</Text>
                <View style={[GS.row, GS.crossCenter, {
                    marginTop: 12,
                    paddingHorizontal: 8,
                    borderRadius: 14,
                    backgroundColor: 'rgba(0,0,0,.2)',
                }]}>
                    <Icon 
                        name={"search"} 
                        color={'white'} 
                        size={20}
                        style={{
                            padding: 6,
                            borderRadius: 10,
                        }}/>
                    <TextInput 
                        value={text}
                        onChangeText={setText}
                        placeholder="Search here..."
                        placeholderTextColor={"rgba(255,255,255,0.4)"}
                        style={[{flex: 1, marginLeft: 6},GS.white14]}/>
                    {text.length > 0 ? 
                        <TouchableOpacity onPress={() => {
                            setText("")
                        }}>
                            <Icon
                                name={"close"}
                                color={"white"}
                                size={20}
                                style={{marginRight: 6}}
                            />
                        </TouchableOpacity>
                    : null}
                </View>
            </View>
            {
                loading ? <View style={[GS.flex, GS.row, GS.mainCenter]}><ProgressBar color={Colors.primary}/></View> :
                <View style={[GS.flex, GS.column]}>
                    <FlatList
                        style={{flex: 1}}
                        data={cars}
                        contentContainerStyle={{paddingBottom: 24,}}
                        renderItem={({ item }) => 
                            <ItemCar style={{marginHorizontal: 24, marginTop: 24}} car={item}/>
                        }
                    />
                </View>
            }
        </SafeAreaView>
    )
}

export default HomeScreen