import { BrowserRouter,Routes,Route } from "react-router-dom"
import Reg from "./Reg"
import Home from "./Home"
function App() {

  return (
    <>
      <h1>Iam App</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/h" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
