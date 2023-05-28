import LandingPage from "./pages/landingPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chat"
          element={<LandingPage />}
          key="route-landing-page"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
