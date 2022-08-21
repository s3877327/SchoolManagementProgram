import './App.css';
import NavBar from './components/AddStudent/NavBar';
import AddStudent from './components/AddStudent/AddStudent';


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
