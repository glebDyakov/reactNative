import {Platform,View,Text,StyleSheet} from 'react-native'
import React from 'react'
export const Navbar=(props)=>{
    return  (
        <View style={{} ...styles.navbarPlatform.select({
            ios:styles.navbarIos,
            android:styles.navbarAndroid,
        }})>
            <AppTextBold style={styles.text}>{props.title}</AppTextBold>
        </View>
    )
}
const styles=StyleSheet.create({
    navbar:{
        height:'70px',
        alignItems:'center',
        justifyContent:'flex-end',
        
        paddingBottom:'10',

    },
    navbarAndroid:{
        backgroundColor:THEME.MAIN_COLOR,
    },
    navbarIos:{
        backgroundColor:THEME.MAIN_COLOR,
        borderBottomWidth:1
    },
    text:{
        color:Platform.OS==='ios' ? THEME.MAIN_COLOR : 'white',
        fontSize:'20'
    }
})