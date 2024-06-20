// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskCreate from './components/TaskCreate';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/add-task" element={<TaskCreate />} />
          <Route path="/edit-task/:id" element={<TaskCreate />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
