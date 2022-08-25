//import pages
import NavBar from "./pages/NavBar";
import AddStudentPage from "./pages/AddStudentPage";
import TeacherPage from "./pages/TeacherPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import Home from "./components/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

//import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer position="top-center" autoClose={3000} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/add-student" element={<AddStudentPage />} />
          <Route exact path="/teacher-page" element={<TeacherPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/student-profile" element={<StudentProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
