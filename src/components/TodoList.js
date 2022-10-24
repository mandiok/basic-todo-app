import { Todo } from "./Todo"
import { useState, useEffect } from "react"; 


export const TodoList = () => { 
    const [todos, setTodos] = useState(() => {
        const items = localStorage.getItem("items");
        const parsed = JSON.parse(items);
        return parsed || [];
    });
    
    const [textinput, setTextInput] = useState("");

    const changeText = (e) => {
       setTextInput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const newTodos = [...todos, {description : textinput, done: false}];
        setTodos(newTodos);
        setTextInput("");
    }

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
                return !item.done
            })
            countOpenTodos(donetodos.length);
    }

    const changeTodo = (index) => { 
        const newTodos = [...todos]
        if(newTodos[index].done) {
            newTodos[index].done = false
        } else {
            newTodos[index].done = true
        }
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    useEffect(() => {
        countOpen();
        localStorage.setItem("items", JSON.stringify(todos));
    }, [todos])
    

  return (
    <div className="shadow-sm hover:shadow-lg">
        <div className="text-center bg-gray-900 text-white py-4 font-semi-bold">
            <h1 className="text-3xl">Todo List</h1>
            <h2>Offene Todos: {opencount}</h2>
            <form className="grid grid-cols-3 py-2">
                <input 
                    type="text" 
                    value={textinput}
                    placeholder="Neues Todo..." 
                    className="col-span-2 py-2 text-gray-900"
                    onChange={changeText}>
                </input>
                <input 
                    type="submit" 
                    value="Add Todo" 
                    className="col-span-1 bg-gray-200 text-gray-900 cursor-pointer" 
                    onClick={submit}>
                </input>
            </form>
        </div>

        {todos.map((item, index) => {
            return (
            <Todo 
                description={item.description} 
                done={item.done} 
                key={index}
                index={index}
                onChangeTodo={changeTodo}
                onDeleteTodo={deleteTodo}
            />)
        })}
       
    </div>
  )
}
