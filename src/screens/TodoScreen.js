import {FontAwesome,AntDesign} from '@expo/vector-icons'
import {THEME} from 
import React,{useState,useContext} from 'react'
import {Dimensions,StyleSheet,View,Text,Button} from 'react-native'
import {AppTextBold} from '../components/ui/AppTextBold'
export const TodoScreen=()=>{
    const {todos,updateTodo,removeTodo}=useContext(TodoContext)
    const {todoId,changeScreen}=useContext(ScreenContext)
    const todo=todos.find(t=>t.id===todoId)
    const [modal,setModal]=useState(false)
    const saveHandler=async (title)=>{
        await updateTodo(todo.id,title)
        setModal(false)
    }
    return (
        <View>
            <EditModal onSave={onSave} value={todo.title} visible={modal} onCancel={()=>setModal(false)}></EditModalмфдгу>
            <AppCard style={styles.title}>
                <AppTextBold>
                    {todo.title}
                </AppTextBold>
                <AppButton onPress={()=>setModal(true)} title="Редактировать">
                    <FontAwesome name="edit" size={20}/>
                </AppButton>
            </AppCard>
            <View style={styles.button}>
                <View style={styles.buttons}>
                    <AppButton onPress={()=>changeScreen(null)} color={THEME.GRAY_COLOR}><AntDesign name="back" size={20} color="#fff">Назад</AntDesign></AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={removeTodo(todo.id)} color={THEME.DANGER_COLOR}><FontAwesome name="remove" size={20} color="#fff">удалить</FontAwesome></AppButton>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    card:{
        marginBottom:20,
        padding:15
    },
    button:{
        // width:Dimensions.get('window').width / 2,
        width:Dimensions.get('window').width > 400 ? 150 : 100
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize:26
    }
})