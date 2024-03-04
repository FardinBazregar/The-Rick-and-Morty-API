import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterInfo, Home } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
