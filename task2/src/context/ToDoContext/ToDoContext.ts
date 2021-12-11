import React, { createContext } from "react";
import { IToDo } from "../../types";
import { ActionType, ReactActionTypes } from "./action";

interface IInitialState {
    setUncompletedList: React.Dispatch<React.SetStateAction<IToDo[]>>
    setCompletedList: React.Dispatch<React.SetStateAction<IToDo[]>>
    setToDoText: React.Dispatch<React.SetStateAction<string>>
    dispatch: React.Dispatch<ActionType>
    editToDoId: number | null
}

export const initialState = {
    setUncompletedList: () => { },
    setCompletedList: () => { },
    setToDoText: () => { },
    dispatch: () => null,
    editToDoId: null
}

export const ToDoContext = createContext<IInitialState>(initialState)

export const reducer = (state: IInitialState = initialState, action: ActionType) => {
    switch (action.type) {
        case ReactActionTypes.SET_TO_DO_TEXT:
            return { ...state, setToDoText: action.payload }
        case ReactActionTypes.SET_UNCOMPLETED_LIST:
            return { ...state, setUncompletedList: action.payload }
        case ReactActionTypes.SET_COMPLETED_LIST:
            return { ...state, setCompletedList: action.payload }
        case ReactActionTypes.ENABLE_EDIT:
            return {...state, editToDoId: action.payload}
        case ReactActionTypes.DISABLE_EDIT:
            return {...state, editToDoId: action.payload}
        default:
            return state
    }
}