import React from 'react';

export const Todo = ({description, done, onChangeTodo, onDeleteTodo, index}) => {

/* 
    const changeTodo = () => {
        console.log("hallo");
    } */


  return (
    <div>
        <div className={
            done 
            ? "flex justify-between p-2 items-center bg-green-600 text-white"
            : "flex justify-between p-2 items-center bg-red-500 text-white"
        }> 
        <h2 className='text-lg cursor-pointer' onClick={() => {onChangeTodo(index)}}>{description}</h2>
        <button className='text-lg bg-gray-400 p-2 text-white' onClick={() => {onDeleteTodo(index)}}>löschen</button>
        </div> 
    </div>
  )
};
