import {StyleSheet,View} from 'react-native'
import React from 'react'
export const AppCard=props=>{
    <View style={{...style.default, ...props.style}}>
        {props.children}
    </View>
}
const styles=StyleSheet.create({
    default:{
        // border:'green',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'#000',
        shadowRadius:0.3,
        shadowOffset:{width:2,height:2},
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:8,
    }
})