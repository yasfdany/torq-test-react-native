import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    column: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    spaceEvenly: {
        justifyContent: 'space-evenly'
    },
    mainCenter: {
        justifyContent: 'center'
    },
    crossCenter: {
        alignItems: 'center'
    },
    flex: {
        flex: 1,
    },
    p12: {
        padding: 12,
    },
    p14: {
        padding: 14,
    },
    p18: {
        padding: 18,
    },
    m14: {
        margin: 14,
    },
    m18: {
        margin: 18,
    },
    moreLineHeight: {
        lineHeight: 20
    },
    bold: {
        fontFamily: 'opensans-bold'
    },
    black12: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'opensans'
    },
    black14: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'opensans'
    },
    black18: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'opensans'
    },
    black24: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'opensans'
    },
    white12: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'opensans'
    },
    white14: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'opensans'
    },
    white18: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'opensans'
    },
})