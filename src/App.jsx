import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StoreFront from './store/StoreFront';
import ProductDetail from './store/ProductDetail';
import AdminDashboard from './admin/AdminDashboard';
import Login from './components/Login';
import Landing from './components/Landing';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    {/* Landing page */}
                    <Route path="/" element={<Landing />} />

                    {/* Store Routes */}
                    <Route path="/store" element={<StoreFront />} />
                    <Route path="/product/:id" element={<ProductDetail />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/login" element={<Login />} />

                    {/* Fallback */}
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
                <WhatsAppButton />
            </Router>
        </CartProvider>
    );
}

export default App;
