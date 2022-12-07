import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import Auth from './pages/auth-hook';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';

export default function AppHook() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));
  const [user, setUser] = useState(null);
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(route => parseRoute(window.location.hash));
    });

  });

  useEffect(() => {
    if (isAuthorizing) {
      const token = window.localStorage.getItem('react-context-jwt');
      const individual = token ? jwtDecode(token) : null;
      setUser(individual);
    }
  }, [isAuthorizing, user]);

  useEffect(() => {
    setIsAuthorizing(false);
  }, [isAuthorizing]);

  function handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser(user);
  }

  function handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    setUser(null);
  }

  function renderPage() {
    const { path } = route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
    return <NotFound />;
  }

  if (isAuthorizing) return null;
  const contextValue = { user, route, handleSignIn, handleSignOut };
  return (
      <AppContext.Provider value={contextValue}>
        <>
          <Navbar />
          <PageContainer>
            { renderPage() }
          </PageContainer>
        </>
      </AppContext.Provider>
  );
}
