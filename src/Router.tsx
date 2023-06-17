import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './styles/layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
    </Routes>
  )
}
