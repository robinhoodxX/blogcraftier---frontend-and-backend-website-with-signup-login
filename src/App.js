import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomescreen from "./components/Welcomescreen";
import LgScrn from "./components/lgscrn/lgscrn"; // adjust path if different
import Sgnp from "./components/sgnp/sgnp"; // adjust path if different
import Hmpg from "./components/hmpg/hmpg"; // adjust path if different
import Tandc from "./components/hmpg/t&c/t&c"; // adjust path if different
import Pp from "./components/hmpg/pp/pp"; // adjust path if different
import Hc from "./components/hmpg/hc/hc"; // adjust path if different
import Cntt from "./components/hmpg/cntt/cntt"; // adjust path if different
import Abt from "./components/hmpg/abt/abt"; // adjust path if different
import Stw from "./components/hmpg/startwriting/stw"; // adjust path if different

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
        <Route path="/hc" element={<Hc />} />
        <Route path="/cntt" element={<Cntt />} />
        <Route path="/abt" element={<Abt />} />
        <Route path="/stw" element={<Stw />} />
      </Routes>
    </Router>
  );
}

export default App;
