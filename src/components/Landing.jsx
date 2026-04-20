import { useNavigate } from 'react-router-dom';
import { Store, UserCog } from 'lucide-react';
import Footer from './Footer';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', padding: '20px' }}>
                <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '40px', color: '#333' }}>Bienvenido al Portal</h1>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        {/* Botón Cliente */}
                        <div 
                            onClick={() => navigate('/store')}
                            className="ml-card" 
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', transition: 'transform 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ background: '#2563eb', padding: '20px', borderRadius: '50%', marginBottom: '20px' }}>
                                <Store size={48} color="white" />
                            </div>
                            <h2 style={{ margin: 0, fontSize: '20px' }}>Entrar como Cliente</h2>
                            <p style={{ color: '#666', marginTop: '10px', marginBottom: 0 }}>Ver catálogo y comprar</p>
                        </div>

                        {/* Botón Admin */}
                        <div 
                            onClick={() => navigate('/admin')}
                            className="ml-card" 
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', transition: 'transform 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ background: '#e0e0e0', padding: '20px', borderRadius: '50%', marginBottom: '20px' }}>
                                <UserCog size={48} color="#333" />
                            </div>
                            <h2 style={{ margin: 0, fontSize: '20px' }}>Entrar como Admin</h2>
                            <p style={{ color: '#666', marginTop: '10px', marginBottom: 0 }}>Gestionar panel y stock</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Landing;
