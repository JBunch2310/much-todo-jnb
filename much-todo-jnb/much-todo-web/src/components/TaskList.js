import { useState, useEffect } from 'react';
import { List, Checkbox } from 'antd';
import Task from './Task';


const fakeTasks = [
    { id: 1, task: 'Buy Beer', done: true},
    { id: 2, task: 'Buy Milk', done: false},
    { id: 3, task: 'Buy Trulys', done: false},
    { id: 4, task: 'Buy Wine', done: true},
    { id: 5, task: 'Buy Paper Towels', done: false},
]

export default function TaskList() {
    const [tasks, setTasks] = useState (fakeTasks)
    
    useEffect(() => {
        fetch('https://much-todo-jnb.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    },[])
   
    const handleCheckButton = (task) => {
        console.log('sending to API' + JSON.stringify(task))

      fetch(`https://much-todo-jnb.uc.r.appspot.com/tasks/${task.target.options}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({done: true}),
    })
        .then(response => response)
        .then(data => console.log('data was added', data))
        .catch(err => console.error(err))
    }    
  return (
    <>
      <List>
        {tasks &&
          tasks.map(singleTask => {
            return <List.Item actions={[<Checkbox onChange={handleCheckButton} options={singleTask.id}>Check</Checkbox>]} key={singleTask.id}>{singleTask.task}</List.Item>
          })}
      </List>
    </>
  )
}