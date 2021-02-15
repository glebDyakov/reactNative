import {Navbar} from '../components/Navbar'
import {Navbar} from './src/Navbar'
import {AppLoading} from 'expo'
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {FlatList,ScrollView ,StyleSheet, Text, View,Alert } from 'react-native';
import * as Font from 'expo-font'
import { THEME } from './src/theme';
import { ScreenState } from './src/Context/Screen/ScreenState';
async function loadApplication(){
  await Font.loadAsync({
    'roboto-regular':require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold':require('./assets/fonts/Roboto-Bold.ttf'),
  })
}
export default function App() {
  // const [isReady,setIsReady]=useState(false)
  
  // if(!isReady){
  //   return <AppLoading startAsync={loadApplication} onError={console.log(err)} onError={()=>setIsReady(true)}></AppLoading>
  // }
  
  // let content=<MainScreen todos={todos} addTodo={addTodo} openTodo={(id)=>{setTodoId(id)}} removeTodo={removeTodo}/>
  // if(todoId){
  //   const selectedTodo=todos.find(todo=>todo.id===todoId)
  //   content=<TodoScreen onSave={updateTodo} onremove={removeTodo} goBack={setTodoId(null)} todo={todo}/> 
  // }
  return (
    <ScreenState>
    <TodoState>
      <MainLayout></MainLayout>
    </TodoState>
    </ScreenState>
    // <View style={styles.container}>
    //   {/* <Text style={ {color:'#fff'} }>Hello React Native!</Text> */}
    //   {/* <Text style={styles.text}>Hello React Native!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
    //   <Navbar title="Todo App"/>
      
    //   <View style={styles.container}>
    //       {content}
    //   </View>

    //   {/* <View>
    //     {todos.map(todo=>{
    //       return (
    //         // <Text key={todo.id}>{todo.title}</Text>
    //           <Todo todo={todo} key={todo.id}></Todo>
    //         )
    //     })}
    //   </View> */}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal:THEME.PADDING_HORIZONTAL,
//     paddingVertical:THEME.PADDING_VERTICAL,
//   },
//   // text:{
//   //   color:'#fff',
//   //   fontSize:25
//   // }
// });
