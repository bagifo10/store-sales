import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StoreFront from './store/StoreFront';
import AdminDashboard from './admin/AdminDashboard';
import Login from './components/Login';
import Landing from './components/Landing';

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                {/* Landing page */}
                <Route path="/" element={<Landing />} />

                {/* Store Routes */}
                <Route path="/store" element={<StoreFront />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/login" element={<Login />} />

                {/* Fallback */}
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
