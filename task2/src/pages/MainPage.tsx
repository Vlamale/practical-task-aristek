import React from "react"
import CompletedToDo from "../components/CompletedToDo"
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import UncompletedToDo from "../components/UncompletedToDo"

const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <Dashboard />
            <main className="content">
                <UncompletedToDo />
                <CompletedToDo />
            </main>
        </>
    )
}

export default MainPage