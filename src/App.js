import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import Strategy from './Components/Strategy';

function App() {
  return (
    <div className="app-container">
      <div className="box1">
        <Sidebar />
      </div>
      <div className="box2">
        <Profile />
        <Statistics />
        <Strategy />
      </div>
    </div>
  );
}

export default App;
