import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import {Login} from 'Components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

// const Authenticated: React.FC = () => {
//   return <h1>Autenticação bem-sucedida!</h1>;
// };

export default App;
