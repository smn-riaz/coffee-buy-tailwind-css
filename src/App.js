import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://i.ibb.co/1MmMPRc/coffeebean.webp

// https://i.ibb.co/ZdGgxgq/coffeelatte2.jpg
// https://i.ibb.co/RD8qr9s/coffeeabout.png
