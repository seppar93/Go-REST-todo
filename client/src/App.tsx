
import { Box } from '@mantine/core'
import './App.css'

import useSWR from 'swr'
import AddTodo from './components/AddTodo'
const fetcher = (url:string) => fetch(`${ENDPOINT}/${url}`).then(r => r.json())
export const ENDPOINT = 'http://localhost:4000'

export interface Todo {
  id: number
  title: string
  body: string
  done: boolean;
}

function App() {
  const {data,mutate} = useSWR<Todo[]>('api/todos', fetcher)


  return (
    <Box>
      {JSON.stringify(data)}
      <AddTodo mutate={mutate}/>

    </Box>
    
  )
}

export default App
