import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { Routes, Route } from "react-router-dom";
import CustomerReport from "./pages/CustomerReport";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Analytics */}
      <Route path="/analytics" element={<Analytics />} />

      {/* AI Chat */}
      <Route path="/chat" element={<Chat />} />

      {/* Reports */}
      <Route path="/reports" element={<Reports />} />

      {/* Settings */}
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/customer-report" element={<CustomerReport />} />
    </Routes>
  );
}

export default App;