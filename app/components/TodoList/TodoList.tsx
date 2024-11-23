
"use client"



import { useState } from "react"

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    //add of items
    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false },
        ]);
        setInputValue("");
    };



    //add values id:
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo)

        )
    };



    //delete todo sction 
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <div className="flex flex-col min-h-screen bg-pink-200">
            <header className="bg-red-200 text-4xl text-black py-7">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl font-serif">TodoList BY Fatima aAQIB</h1>
                    <p className="font-serif mt-3">
                        {""}
                        MANAGE YOUR WORK WITH TODOLIST
                    </p>
                </div>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="max-w-md-auto p-4 bg-red-600 rounded-lg shadow-md">
                    <div className="mb-8">
                        <div className="flex">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-grow p-2 border-black-400 rounded-lg"
                                placeholder="Add a nex task ..." />
                            <button
                                onClick={addTodo}
                                className="ml-2 px-4 py-2 bg white text-white rounded-lg blue hover:bg-blue-600">
                                Add
                            </button>
                        </div>
                    </div>
                    <ul className="space-y-2">
                        {todos.map((todo) => (
                            <li key={todo.id}
                                className={` flex items-center justify-between p-2 border slate-400 rounded-lg ${todo.completed ? " bg-lime-400 line-through " : "bg-amber-300"}`}>
                                <span>{todo.text}</span>
                                <div>
                                    <button

                                    onClick={() => toggleTodo(todo.id)}
                                    className="px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-gray-400">
                                        {todo.completed ? "undo" : "completed"}
                                    </button>
                                    <button

                                    onClick={() => deleteTodo(todo.id)}
                                    className="px-2 py-1 text-sm bg-red-900 rounded-full hover:bg-pink-800">
                                        Delete
                                        
                                    </button>
                                </div>

                            </li>
                        ))}




                    </ul>



                </div>
            </main>
        </div>
    )







}

export default TodoList