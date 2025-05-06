import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UnderConstructionPage } from './pages/underConstruction/UnderConstruction'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnderConstructionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
