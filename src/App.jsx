import { AudioBoy } from './assets/boycomponent/AudioBoy'
import { AudioGirl } from './assets/girlcomponent/AudioGirl'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './assets/home/HomePage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AudioGirl' element={<AudioGirl />} />
        <Route path='/AudioBoy' element={<AudioBoy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
