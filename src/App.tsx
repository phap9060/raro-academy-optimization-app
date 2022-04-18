import Chat from "./pages/Chat";
import { ColorResponsive } from "./pages/ColorResponsive";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/color" element={<ColorResponsive/>} />
      </Routes>
    </BrowserRouter>
    
  );
}