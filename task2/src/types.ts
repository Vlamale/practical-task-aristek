export interface IToDo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface IProcessedToDoData {
    unCompleted: IToDo[]
    completed: IToDo[]
}