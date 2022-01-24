import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from "react-redux"

import GS from '../../../constants/globalStyles'
import Colors from '../../../constants/colors'
import TitleSection from '../../components/TitleSection';
import ItemCar from '../../components/ItemCar';
import ItemSimilarCar from '../../components/ItemSimilarCar';

const DetailCarScreen = (props) => { 
    const navigation = useNavigation()
    const car = props.route.params.car
    const cars = useSelector((state) => state.car.cars)

    return (
         <SafeAreaView style={[GS.container, {backgroundColor: "white"}]}>
            <StatusBar
                translucent
                backgroundColor={"transparent"}
                barStyle={'dark-content'} />
            <ScrollView>
                <View style={GS.column}>
                    <Image style={{
                        width: "100%", 
                        height: 300,
                        resizeMode: "contain",
                        backgroundColor: "white",
                    }} source={{ uri: car.image_url }}/>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.pop()
                        }}
                        style={{
                                position: "absolute",
                                top: 40,
                                left: 18,
                                backgroundColor: "rgba(0,0,0,0.1)",
                                padding: 6,
                                borderRadius: 10,
                        }}>
                        <Icon 
                            name={"arrow-back"} 
                            color={'black'} 
                            size={24}
                            />
                    </TouchableOpacity>
                    <View style={[GS.column, {padding: 18}]}>
                        <Text style={GS.black14}>{car.date_of_launch.split("/")[1]}</Text>
                        <Text style={[GS.black18, GS.bold]}>{car.model}</Text>
                        <Text style={[GS.black12]}>{car.version}</Text>
                    </View>
                    <View style={[
                        GS.row,
                        {flex: 1,flexWrap: "wrap", paddingHorizontal: 14,}
                    ]}>
                        <Text style={[GS.black12 ,styles.chip]}>
                            {car.doors+" door"}
                        </Text>
                         <Text style={[GS.black12 ,styles.chip]}>
                            {car.riding_capacity+" seat"}
                        </Text>
                         <Text style={[GS.black12 ,styles.chip]}>
                            {car.country_of_origin}
                        </Text>
                         <Text style={[GS.black12 ,styles.chip]}>
                            {car.make}
                        </Text>
                         <Text style={[GS.black12 ,styles.chip]}>
                            {car.body_type}
                        </Text>
                    </View>
                </View>
                <Text style={[
                    GS.black14,
                    GS.bold,
                    {marginLeft: 14, marginTop: 14}
                ]}>Car Specification</Text>
                <View style={[GS.column, {marginLeft: 14, marginTop: 14}]}>
                    <TitleSection title={"Retail Price"} value={"¥"+car.msrp}/>
                    <TitleSection style={{marginTop: 8}} title={"Launch Date"} value={"¥"+car.date_of_launch}/>
                    <TitleSection 
                        style={{marginTop: 8}} 
                        title={"Dimension (M)"} 
                        value={`${parseInt(car.overall_width_mm)/1000} x ${parseInt(car.overall_height_mm)/1000} x ${parseInt(car.overall_length_mm)/1000}`}/>
                    <TitleSection 
                        style={{marginTop: 8}} 
                        title={"Weight (Kg)"} 
                        value={car.weight_kg}/>
                    <TitleSection 
                        style={{marginTop: 8}} 
                        title={"Engine Model"} 
                        value={car.engine_model}/>
                     <TitleSection 
                        style={{marginTop: 8}} 
                        title={"Fuel Tank Capacity (L)"} 
                        value={car.fuel_tank_equipment_l}/>
                </View>
                <Text style={[
                    GS.black14,
                    GS.bold,
                    {marginLeft: 14, marginTop: 32}
                ]}>Similar Car</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{flex: 1}}
                    data={cars}
                    contentContainerStyle={{paddingHorizontal: 14,}}
                    renderItem={({ item }) => 
                        <ItemSimilarCar style={{marginRight: 16, marginTop: 12, marginBottom: 24}} car={item}/>
                    }
                />
            </ScrollView>
         </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: "#ebeff8", 
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 32,
        marginRight: 8,
        marginBottom: 8,
    },
})

export default DetailCarScreen