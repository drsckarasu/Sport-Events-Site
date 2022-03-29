import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Main from './Main/main';
import Footer from './Footer/footer';
import AdminPage from './AdminPage/adminPage';

function App() {
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    const getLocalCards = () => {
      if (!JSON.parse(localStorage.getItem('dashboard'))) {
        localStorage.setItem('dashboard', JSON.stringify([]));
      } else {
        const cardLocal = JSON.parse(localStorage.getItem('dashboard'));
        setDashboard(cardLocal);
      }
    };
    getLocalCards();
  }, []);

  useEffect(() => {
    const saveLocalCards = () => {
      localStorage.setItem('dashboard', JSON.stringify(dashboard));
    };
    saveLocalCards();
  }, [dashboard]);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
              dashboard={dashboard}
              setDashboard={setDashboard}
              />
            }
          />
          <Route
            path="/admin-Page"
            element={
              <AdminPage
                dashboard={dashboard}
                setDashboard={setDashboard}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
