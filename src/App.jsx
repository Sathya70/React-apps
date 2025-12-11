import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import StudentLogin from "./pages/StudentLogin";

import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

import AddStudent from "./pages/AddStudent";
import AddMarks from "./pages/AddMarks";
import ViewStudents from "./pages/ViewStudents";
import ViewMarks from "./pages/ViewMarks";
import UpdateStudent from "./pages/UpdateStudent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/add-marks" element={<AddMarks />} />
        <Route path="/admin/view-students" element={<ViewStudents />} />
        <Route path="/admin/view-marks" element={<ViewMarks />} />
        <Route path="/admin/update-student/:id" element={<UpdateStudent />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* Student */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
