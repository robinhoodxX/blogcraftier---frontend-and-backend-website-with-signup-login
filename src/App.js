import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomescreen from "./components/Welcomescreen";
import LgScrn from "./components/lgscrn/lgscrn"; // adjust path if different
import Sgnp from "./components/sgnp/sgnp"; // adjust path if different
import Hmpg from "./components/hmpg/hmpg"; // adjust path if different
import Tandc from "./components/hmpg/t&c/t&c"; // adjust path if different
import Pp from "./components/hmpg/pp/pp"; // adjust path if different

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomescreen />} />
        <Route path="/lgscrn" element={<LgScrn />} />
        <Route path="/sgnp" element={<Sgnp />} />
        <Route path="/hmpg" element={<Hmpg />} />
        <Route path="/t&c" element={<Tandc />} />
        <Route path="/pp" element={<Pp />} />
      </Routes>
    </Router>
  );
}

export default App;
