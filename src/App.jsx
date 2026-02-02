import { AudioBoy } from './assets/boycomponent/AudioBoy'
import { AudioGirl } from './assets/girlcomponent/AudioGirl'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './assets/home/HomePage'
import { GifAndHello } from './assets/AudioAndHello/GifAndHello'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AudioGirl' element={<AudioGirl />} />
        <Route path='/AudioBoy' element={<AudioBoy />} />
        <Route path='/gifandhello' element={<GifAndHello />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
