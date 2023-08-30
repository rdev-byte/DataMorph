import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CreateUserPage from './components/CreateUserPage';
import UploadPage from './components/UploadPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes> {/* Use Routes component here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;