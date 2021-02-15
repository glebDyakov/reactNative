import React,{useState} from 'react'
import {AntDesign} from 
import {Alert,View,StyleSheet,TextInput,Button,Keyboard} from 'react-native'
export const AddTodo=({onSubmit})=>{
    const [value,setValue]=useState('')
    const pressHandler=()=>{
        if(value.trim()){
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        }else{
            
            Alert.alert('название дела не может быть пцустым')
        }
            }
    return (
        
        <View style={styles.block}></View>
        <TextInput autoCorrect={false} keyboardType={"number-pad"} autoCapitalize={"none"} style={styles.input} onChangeText={text=>setValue(text)} value={value} placeholder="введите название дела... ">

        </TextInput>
        <AntDesign.Button onPress={pressHandler} name="pluscircleo">добавить</AntDesign.Button>
        // <Button title="добавить" onPress={pressHandler}>
            
        // </Button>
    )
}
const styles=StyleSheet.create({
    block:{
        marginBottom:15,
        flexDirection:'row',
        justifyContent:'space-between'
        alignItems:'center'
    },
    input:{
        padding:10,
        width:'80%',
        borderStyle:'solid',
        borderBottomWidth:2,
        borderBottomColor:THEME.MAIN_COLOR
    }
})