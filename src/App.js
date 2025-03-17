import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Table from "./Table";
import SignIn from "./SignIn";
import Billing from "./Billing";
import VirtualReality from "./VirtualReality";
import Rtl from "./Rtl";
import Profile from "./Profile";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Table" element={<Table />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Billing" element={<Billing />} />
        <Route path="VirtualReality" element={<VirtualReality />} />
        <Route path="Rtl" element={<Rtl />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
