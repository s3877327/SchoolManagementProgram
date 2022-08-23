import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
          <Route index element={<Homepage/>} />
          <Route exact path="/student-profile" element={<StudentProfilePage />} />
          <Route exact path="/add-student" element={<AddStudentPage/>}/>
          <Route exact path="/teacher-page" element={<TeacherPage/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
