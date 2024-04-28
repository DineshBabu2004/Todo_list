import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo() {
    
    let [todos,setTodo] = useState([{task:"sample",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState([""]);
    function print(event) {
        console.log(newTodo);
        setNewTodo(event.target.value);
       
    }
    function update() {
        setTodo([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo("");

    }

    function deleteTodo(id) {
        setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
    
    let upperCase = () => {
        setTodo((prevTodos) => 
             prevTodos.map((todo)=>{
                return {...todo, task: todo.task.toUpperCase()}
            })
        );
    }

    let done = (id) => {
        setTodo((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                } else {
                    return todo;
                }
            });
        });
    };
    
        

                           
 return(
        <>
        <h1>Todo List</h1>
        <input type="text" onChange={print} value ={newTodo}/>
        <br />
        <button onClick={update}>Add Todo works</button>
        <ul>
            
            {todos.map((todo)=>(
             <li key ={todo.id} style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task} <span><button onClick={()=>{deleteTodo(todo.id)}}>Delete</button></span>   
            <button onClick={()=>{done(todo.id)}}>mark as done</button></li>
        ))}
          
       
        </ul>
        <button onClick={upperCase}> Update to update case</button>
        </>
    );

}