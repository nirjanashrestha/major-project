import React from 'react'

const TodoItem = ({item,value,setValue}) => {
    console.log(item)
  return (
    <>
    
    <div>{item.name}</div>
    <button onClick={()=>{
        setValue(value.filter((check)=>{
return (check != item)
        }))
    }} >Delete</button>
    </>
  )
}

export default TodoItem