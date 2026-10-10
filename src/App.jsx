import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Linkedin from "./pages/Linkedin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/linkedin" element={<Linkedin/>}/>
      </Routes>
    </BrowserRouter>
  );
}