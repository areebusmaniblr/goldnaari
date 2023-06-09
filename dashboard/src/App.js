import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Header from './components/header';
import Plans from './components/plans';
import Collections from './components/collections';
import PendingCollections from './components/pendingCollections';
import Login from './components/login';
import NotFound from './components/notfound';
import { getAuthToken, setAuthHeaders } from './utils/auth';

import './App.css';

const isLoggedIn = !!getAuthToken();
if (isLoggedIn) {
    setAuthHeaders();
}

const App = () => {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const handleLogin = () => {
        setLoggedIn(true);
    }

    if (!loggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <main className="flex-shrink-0">
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/plans" element={<Plans />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/pending-collections" element={<PendingCollections />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
};

export default App;
