import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StoreFront from './store/StoreFront';
import ProductDetail from './store/ProductDetail';
import AdminDashboard from './admin/AdminDashboard';
import Login from './components/Login';
import Landing from './components/Landing';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';

// Páginas legales y contacto
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingReturns from './pages/ShippingReturns';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactPage from './pages/ContactPage';

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

                    {/* Legal & Info Pages */}
                    <Route path="/terminos" element={<TermsAndConditions />} />
                    <Route path="/envios" element={<ShippingReturns />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacidad" element={<PrivacyPolicy />} />
                    <Route path="/contacto" element={<ContactPage />} />

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
