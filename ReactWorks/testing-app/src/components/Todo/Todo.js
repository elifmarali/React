import React, { useState } from 'react'
const defaultTodo = [
    { name: "React Calis" },
    { name: "Ingilizce Calis" },
    { name: "Spora Git" }
]
function Todo() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState(defaultTodo);
    const addItem = () => {
        setTodoList([...todoList, { name: text }]);
        setText("")
    }
    return (
        <>
            <div>
                <input placeholder='todoInput' onChange={(e) => setText(e.target.value)} value={text} />
                <button onClick={() => addItem()}>Add</button>
            </div>
            <div>
                {
                    todoList.map((todo, index) => {
                        return <div key={index} placeholder='todoItem'>{todo.name}</div>
                    })
                }
            </div>
        </>
    )
}

export default Todo