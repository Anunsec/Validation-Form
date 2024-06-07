import "./App.css";
import FormInput from "./components/FormInput";
import ParticlesBg from 'particles-bg'
import Success from "./components/FormSuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
            <ParticlesBg type="circle" bg={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormInput />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;