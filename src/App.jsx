import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './Detail'
import Liste from './Liste'



function App ()  {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Liste/>}/>
      <Route path='/detail/:idvoitures' element={<Detail/>} />
    </Routes>
    
    
    
    </div>
  )
}

export default App