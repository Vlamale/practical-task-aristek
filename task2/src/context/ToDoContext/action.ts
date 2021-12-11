import { IToDo } from "../../types"

export enum ReactActionTypes {
    SET_TO_DO_TEXT = 'SET_TO_DO_TEXT',
    SET_TO_DO_TEXT_SETTER = 'SET_TO_DO_TEXT_SETTER',
    SET_UNCOMPLETED_LIST = 'SET_UNCOMPLETED_LIST',
    SET_COMPLETED_LIST = 'SET_COMPLETED_LIST',
    ENABLE_EDIT = 'ENABLE_EDIT',
    DISABLE_EDIT = 'DISABLE_EDIT'
}

interface ISetToDoText {
    type: ReactActionTypes.SET_TO_DO_TEXT,
    payload: React.Dispatch<React.SetStateAction<string>>
}

export const setToDoTextAction = (payload: React.Dispatch<React.SetStateAction<string>>): ISetToDoText => {
    return {
        type: ReactActionTypes.SET_TO_DO_TEXT,
        payload
    }
}

interface ISetUncompletedList {
    type: ReactActionTypes.SET_UNCOMPLETED_LIST ,
    payload: React.Dispatch<React.SetStateAction<IToDo[]>>
}

export const setUncompletedListAction = (payload: React.Dispatch<React.SetStateAction<IToDo[]>>): ISetUncompletedList => {
    return {
        type: ReactActionTypes.SET_UNCOMPLETED_LIST,
        payload
    }
}

interface ISetCompletedList {
    type: ReactActionTypes.SET_COMPLETED_LIST ,
    payload: React.Dispatch<React.SetStateAction<IToDo[]>>
}

export const setCompletedListAction = (payload: React.Dispatch<React.SetStateAction<IToDo[]>>): ISetCompletedList => {
    return {
        type: ReactActionTypes.SET_COMPLETED_LIST,
        payload
    }
}

interface IEnableEdit {
    type: ReactActionTypes.ENABLE_EDIT,
    payload: number
}

export const enableEditAction = (payload: number): IEnableEdit => {
    return {
        type: ReactActionTypes.ENABLE_EDIT,
        payload
    }
}

interface IDisableEdit {
    type: ReactActionTypes.DISABLE_EDIT,
    payload: null
}

export const disableEditAction = (): IDisableEdit => {
    return {
        type: ReactActionTypes.DISABLE_EDIT,
        payload: null
    }
}

export type ActionType = ISetToDoText | ISetUncompletedList | ISetCompletedList | IEnableEdit | IDisableEdit