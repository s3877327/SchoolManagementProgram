import './App.css';
import NavBar from './components/AddStudent/NavBar';
import AddStudent from './components/AddStudent/AddStudent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StudentProfilePage from '../../../SchoolManament_studentprofile/schoolmanage/src/pages/StudentProfilePage';
import TeacherPage from '../../../SchoolManament_studentprofile/schoolmanage/src/pages/TeacherPage';


function App() {
  return (
    <>
      <NavBar />
      <AddStudent />
      <Router>
      <Routes>
        <Route exact path="/student-profile" element={<StudentProfilePage />} />
        <Route exact path="/teacher-manage" element={<TeacherPage />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
