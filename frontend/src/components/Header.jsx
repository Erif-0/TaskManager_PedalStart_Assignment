
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate('/add-task');
  };
  
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">📝 Task Manager</Link>
        </h1>
        <nav className="nav">
          <ul>
            
            <li><button onClick={handleAddTask}>➕</button></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
  
};

export default Header;
