import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import PlanandPricing from "./components/PlanandPricing"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="obituary" element={<Home />} />
        <Route path="plan" element={<PlanandPricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
