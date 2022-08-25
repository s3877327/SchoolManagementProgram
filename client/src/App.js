import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './pages/NavBar';
import AddStudentPage from './pages/AddStudentPage';
import TeacherPage from './pages/TeacherPage';
import StudentProfilePage from "./pages/StudentProfilePage";
import Homepage from './components/Homepage/Homepgae';
import LoginForm from './pages/LoginForm';
// import AddStudent from './components/AddStudent/AddStudent';



function App() {
  return (
    <>
      {/* <NavBar />
      <AddStudentPage/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<StudentProfilePage/>} />
          <Route exact path="/add-student" element={<AddStudentPage/>}/>
          <Route exact path="/teacher-page" element={<TeacherPage/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
