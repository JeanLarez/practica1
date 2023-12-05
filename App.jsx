import { Routes, Route } from "react-router-dom"
import Alert from "./src/components/Alert"
import Navbar from "./src/components/Navbar"
import Grid from "./src/components/Grid"
import Contador from "./src/components/Contador"
import UserGrid from "./src/components/UserGrid"
import Form from "./src/components/Form"

const App = () => {
  return (
    <div>
      <Alert />
      <Navbar />
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/usuarios" element={<UserGrid />} />
        <Route path="/registro" element={<Form />} />
        <Route path="*" element={<Grid />} />
      </Routes>

    </div>
  )
}

export default App
