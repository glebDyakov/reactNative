import {Navbar} from '../components/Navbar'
import { THEME } from './theme';
import React,{useContext} from 'react'
import {View,StyleSheet} from 'react-native'
export const MainLayout=()=>{
    // const {todos,addTodo,removeTodo,updateTodo}=useContext(TodoContext)
    const {todoId,changeScreen}=useContext(ScreenContext)
    // const [isReady,setIsReady]=useState(false)
  
  if(!isReady){
    return <AppLoading startAsync={loadApplication} onError={console.log(err)} onError={()=>setIsReady(true)}></AppLoading>
  }
  
  let content=<MainScreen
  //  todos={todos} addTodo={addTodo} openTodo={changeScreen} removeTodo={removeTodo}
   />
  // if(todoId){
  //   const selectedTodo=todos.find(todo=>todo.id===todoId)
  //   content=<TodoScreen
  //   //  onSave={updateTodo} onremove={removeTodo} goBack={()=>changeScreen(null)} todo={todo}
  //    /> 
  // }
    // const [todos,setTodos]=useState(null)
    // const [todoId,setTodoId]=useState(null)
    // const addTodo=(title)=>{
    
    //     const newTodo={
    //       id:Date.now().toString(),
    //       title:title
    //     }
    //     setTodos(todos.concat([newTodo]))
    //     setTodos((prevTodos)=>{
    
    //       return [
    //         ...prevTodos,
    //         newTodo
    //       ]
    //     })
        
    //   }
    //   const updateTodo=(id,title)=>{
    //     setTodos(old=>old.map(todo=>{
    //       if(todo.id===id){
    //         todo.title=title
    //       }
    //       return todo
    //     }))
    //   }
    //   const removeId=(id)=>{
    //     const todo=todos.find(t=>t.id===id)
    //     Alert.alert(
    //       'удаление элемента',
    //       `вы уверены что хотиите удалить ${todo.title}`,
    //       [
            
    //         {
    //           text: 'отмена',
              
    //           style: 'cancel'
    //         },
    //         { text: 'удалить', onPress: () => {
    //           setTodoId(null)
    //           setTodos(prev=>prev.filter(todo=>todo.id!==id))
    
    //         } }
    //       ],
    //       { cancelable: false }
    //     );
        
    //   } 
    return (
        <View style={styles.wrapper}>
      <Navbar title="Todo App"/>
      
      <View style={styles.container}>
          {todoId ? <TodoScreen></TodoScreen> : <MainScreen></MainScreen>}
      </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:THEME.PADDING_HORIZONTAL,
    paddingVertical:THEME.PADDING_VERTICAL,
    flex:1
  },
  wrapper:{
    flex:1
  }
  // text:{
  //   color:'#fff',
  //   fontSize:25
  // }
});