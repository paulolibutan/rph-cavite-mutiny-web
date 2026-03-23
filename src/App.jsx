import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import MainPage from './pages/MainPage'
import Sources from './pages/Sources'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
    </>
  )
}
