import NavbarAdmin from "../components/NavbarAdmin";
import "./AdminDashboard.css";   // <-- ADD THIS

export default function AdminDashboard() {
  return (
    <>
     

      <div className="admin-dashboard-container">
        <div className="admin-dashboard-card">
          <h2 className="dashboard-title">Admin Dashboard</h2>

          <div className="dashboard-buttons">
            <a className="btn btn-dark m-2 dashboard-btn" href="/admin/add-student">Add Student</a>
            <a className="btn btn-success m-2 dashboard-btn" href="/admin/view-students">View Students</a>
            <a className="btn btn-primary m-2 dashboard-btn" href="/admin/add-marks">Add Marks</a>
            <a className="btn btn-info m-2 dashboard-btn" href="/admin/view-marks">View Marks</a>
          </div>
        </div>
      </div>
    </>
  );
}
