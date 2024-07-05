import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './Components/InputForm'
import Card from './Components/Card'
import { TodoContextProvider, useTodo } from './Contexts/todoContext'

function App() {
  

  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')));

  // Function for editing the todos
  const editTodo = (id, newTitle) => {
    setTodo((todos) => todos.map((prev) => (prev.id === id ? { ...prev, title: newTitle } : prev)));
  };

  const addTodo = (todo) => {
    setTodo((prev) => [todo, ...prev]);
  };

  const deleteTodo = (id) => {
  
    setTodo((prevTodos) => {
      const updatedTodos = [...prevTodos]; // Create a copy of the previous state
      const index = updatedTodos.findIndex((todo) => todo.id === id); // Find the index of the todo to delete
  
      if (index !== -1) {
        updatedTodos.splice(index, 1); 
      }
  
      return updatedTodos; 
    });

  };

  const toggleComplete = (id) => {
    let todoos = [...todos];
    for(let td of todoos){
      if(td.id == id && !td.complete){
        td.complete = true;
        todoos.splice(todoos.indexOf(td), 1);
        todoos.push(td);
        break
      }
      else if(td.id == id ){
        td.complete = false;
        todoos.splice(todoos.indexOf(td), 1);
        todoos.unshift(td);
        break
      }
    }
    setTodo(todoos);

};



  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <div 
    className='flex flex-col justify-between '
    style={{height: '80vh'}}
    >
        <TodoContextProvider  value={{todos, editTodo, addTodo, deleteTodo, toggleComplete}} >
          <InputForm/>
          <div className='list  delay-75' style={{height: '90%', overflow: 'scroll'}} >
              {
                todos.map((todo) => (
                      <Card key={todo.id} todo={todo} />
                  
                ))
              } 
          </div>
       </TodoContextProvider>
    </div>

  )
}

export default App
