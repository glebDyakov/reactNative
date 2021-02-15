import React from 'react'
import {screenReducer} from './screenReducer'
import {ScreenContext} from './ScreenContext'


export const ScreenState=({children})=>{
    const [state,dispatch]=useReducer(screenReducer,null)
    const changeScreen=(id)=>dispatch(type:CHANGE_SCREEN,payload:id)
    return <ScreenContext.Provider value={{

        changeScreen,todoId:state
    }}></ScreenContext.Provider>}
}