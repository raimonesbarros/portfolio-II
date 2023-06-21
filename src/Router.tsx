import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './styles/layout/defaultLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
