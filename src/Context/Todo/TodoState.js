import {Http} from '../../http'
import React,{useReducer,useState} from 'react'
import {Alert} from 'react-native'
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ScreenContext } from '../Screen/ScreenContext'
import { UPDATE_TODO } from '../types'
export const TodoState=()=>({
    const initialState={
        todos:[],
        loadgin:false,
        error:null
        }
    const {changeScreen}=useContext(ScreenContext)
    const [state,dispatch]=useReducer(todoReducer,initialState)
    const addTodo=(title)=>{
        dispatch({type:ADD_TODO,title:title})
    }
    const removeTodo=(id)=>{
        const todo=state.todos.find(t=>t.id===id)
        Alert.alert(
                  'удаление элемента',
                  `вы уверены что хотиите удалить ${todo.title}`,
                  [
                    
                    {
                      text: 'отмена',
                      
                      style: 'cancel'
                    },
                    { text: 'удалить', onPress: async() => {
                    //   setTodoId(null)
                    //   setTodos(prev=>prev.filter(todo=>todo.id!==id))
                        changeScreen(null)
                        await Http.delete("https://rn-todo-app-c06a0.firebaseio.com/todos.json")
                        await fetch("https://rn-todo-app-c06a0.firebaseio.com/todos.json",{
                        method:'DELETE',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({title})
                        })
                        dispatch({type:REMOVE_TODO,id})
                    } }
                  ],
                  { cancelable: false }
                );
        
    }
    const addTodo=async (title)=>{
        // const response = await fetch("https://rn-todo-app-c06a0.firebaseio.com/todos.json",{
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify({title})
        // })
        // const data=await response.json()
        clearError()

        try{
            const data=await Http.post('https://rn-todo-app-c06a0.firebaseio.com/todos.json',{title})
        dispatch({type:UPDATE_TODO,title,id:data.name})

        }catch(e){
            showError('что топошло не так')
        }
        
    }
    const fetchTodos=()=>{

        showLoader()
        clearError()
        try{
            fetch("https://rn-todo-app-c06a0.firebaseio.com/todos.json",{
            method:"GET",
            headers:{'Content-Type':'application/json'}
        })
        // const data=await response.json()
        const data=Http.get("https://rn-todo-app-c06a0.firebaseio.com/todos.json")
        const todos=Object.keys(data).map(key=>({...data[key],id:key}))
        dispatch({type:FETCH_TODOS,todos})
        }catch(e){
            showError('что то пошло не так')

        }finnaly{
            hideLoader()
        }
        
        
    }
    const updateTodo=async (id,title)=>{
        clearError()
        try{
            await fetch(`https://rn-todo-app-c06a0.firebaseio.com/todos/${id}.json`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title})
        })
        await Http.patch(`https://rn-todo-app-c06a0.firebaseio.com/todos/${id}.json`)
        dispatch({type:UPDATE_TODO,id,title})
    }catch(e){
        showError('что то пошло не так')

    }
        
    }
    const showLoader=()=>{
        dispatch({type:SHOW_LOADER})
    }
    const hideLoader=()=>{
        dispatch({type:HIDE_LOADER})
    }
    const showError=(error)=>{
        dispatch({type:SHOW_ERROR,error})
    }
    const clearError=()=>{
        dispatch({type:CLEAR_ERROR})
    }
    return <TodoContext.Provider value={{loading:state.loading,error:state.error,fetchTodos,todos:state.todos,addTodo,updateTodo,removeTodo}}>{children}</TodoContext.Provider>
})