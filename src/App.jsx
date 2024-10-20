import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
