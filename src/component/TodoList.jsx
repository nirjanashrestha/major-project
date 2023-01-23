import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [value,setValue] = useState([
        {
        name:"sunita",
        address:"chautara",
        roll:12,
        glasses:false
      },{
        name:"susmita",
        address:"dhobikhola",
        roll:14,
        glasses:false
      },{
        name:"nisha",
        address:"thulosiruwari",
        roll:20,
        glasses:true
      },{
        name:"susma",
        address:"thulosiruwari",
        roll:13,
        glasses:false
      }
    ])
  return (
    <div>
        <button>Clickme</button>
        {
            value.map((item)=>{
return  <TodoItem setValue={setValue} value={value} item={item}/>
            })
        }
    </div>
  )
}

export default TodoList