import { Route, Routes } from 'react-router-dom';
import Login from '@/components/login/Login.jsx';
import Main from '@/layout/main/Main.jsx';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    );
}
