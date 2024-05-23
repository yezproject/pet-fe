import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

const Main = React.lazy(() => import('@/layout/main/Main.jsx'));
const Login = React.lazy(() => import('@/components/login/Login.jsx'));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main/*" element={<Main />} />
            </Routes>
        </Suspense>
    );
}
