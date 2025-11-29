// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import validator from 'validator';

// function App() {
//   const emails = ['test@test.com', 'abcDE123'];

//   return (
//     <div>
//       {emails.map((email, index) => (
//         <p key={index}>
//           {email} is valid email? {validator.isEmail(email) ? 'Yes' : 'No'}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import validator from 'validator';

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleCheck = () => {
    setIsValid(validator.isEmail(email));
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Email ვალიდაცია</h2>
      <input
        type="text"
        placeholder="ჩაწერეთ Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '5px', width: '250px' }}
      />
      <button
        onClick={handleCheck}
        style={{ marginLeft: '10px', padding: '5px 10px' }}
      >
        შემოწმება
      </button>

      {isValid !== null && (
        <p style={{ marginTop: '10px' }}>
          {email} is valid email?{' '}
          {isValid ? 'ვალიდურია ✅' : 'არა არის ვალიდური ❌'}
        </p>
      )}
    </div>
  );
}

export default App;
