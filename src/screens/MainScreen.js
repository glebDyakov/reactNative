import {AddTodo} from '../components/AddTodo'
import React,{useCallback,useState.useEffect,useContext} from 'react'
import {Todo} from '../components/Todo'
import {StyleSheet,View,FlatList,Image,Dimensions} from 'react-native'
export const MainScreen=({addTodo,todos,removeTodo,openTodo})=>{

    const {addTodo,todos,removeTodo,fetchTodos,loading,error}=useContext(TodoContext)
    const {changeScreen}=useContext(ScreenContext)
    const [deviceWidth,setDeviceWidth]=useState(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    )
    const loadTodos=()=>useCallback(async ()=>{
        await fetchTodos()

    },[fetchTodos])
    useEffect(()=>{
        const update=()=>{
            const width=Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change',update)
        return ()=>{
            Dimensions.removeEventListener('change',update)
        }
    })
    useEffect(()=>{
        loadTodos()
    },[])
    const width=Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    if(loading){
        return (
            <AppLoading></AppLoading>
        )
    }
    if(error){
        return (
            <View style={styles.center}>
                <AppText>{error}</AppText>
                <AppButton onPress={loadTodos}>повторить</AppButton>
            </View>
        )
    }
    let content=(

        <View style={{width}}></View>
        <FlatList
                    keyExtractor={(item)=>item.id.toString()}
                    data={todos}
                    renderItem={({item})=>{
                    <Todo todo={item} onOpen={changeScreen} onRemove={removeTodo}></Todo>
                    }}
                    
                ></FlatList>
    )
    if(todos.legth===0){
        content=<View style={styles.imgWrap}>
                    <Image style={styles.image} source={require('../../assets/no-items.png')}></Image>

        </View>
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}></AddTodo>
            {content}
        </View>
    )
}
const styles=StyleSheet.create({
    imgWrap:{
        alignItems:'center',
        alignItems:'center',
        padding:10,
        
        height:300
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    error:{
        fontSize:20,
        color:THEME.DANGER_COLOR
    }
})