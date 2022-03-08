
import { Box } from '@mantine/core'
import './App.css'

import useSWR from 'swr'
const fetcher = (url:string) => fetch(`${ENDPOINT}/${url}`).then(r => r.json())
export const ENDPOINT = 'http://localhost:4000'



function App() {


  return (
    <Box>
      Test
    </Box>
    
  )
}

export default App
