import './App.css';
import profileImg from './me.jpg';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <img className="profile" src={profileImg} alt="Profile" />

        <h1>Guka Khachidze</h1>
        <p>Junior Developer • React & JavaScript Enthusiast</p>
      </div>
    </div>
  );
}

export default App;
