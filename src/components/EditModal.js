import React,{useState} from 'react'
import {View,StyleSheet,TextInput,Button} from 'react-native'
export const EditModal=({visible,onCancel,value,onSave})=>{
    const [title,setTitle]=useState(value)
    const saveHandler=()=>{
        if(title.trim().length<3){
            Alert.alert("ошибка",`минимальная длина названия 3 символа сейчас длина ${title.trim.length}`)
        }else{
            onSave(title)
        }
    }
    const cancelHandler=()=>{
        setTitle(value)
        onCancel()
    }
    return (
        <Modal animationType={'slide'} transparent={false} visible={visible}>
            <View style={styles.wrap}>
                <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder="введите название" autoCapitalize="none" autoCorrect={false} maxLength={64}>

                </TextInput>
                <View style={styles.buttons}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={cancelHandler}></AppButton>
                    <AppButton onPress={saveHandler}></AppButton>
                </View>
            </View>
        </Modal>
    )
}
const styles=StyleSheet.create({
    wrap:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    input:{
        padding:10,
        borderBottomColorTHEME.MAIN_COLOR,
        borderBottomWidth:2,
        width:'80%'
    },
    buttons:{
        width:'80%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center'
    }
})