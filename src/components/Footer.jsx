import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const linkStyle = {
        marginBottom: '8px',
        cursor: 'pointer',
        transition: 'color 0.2s',
        fontSize: '14px',
        color: '#d1d5db',
    };

    const handleLink = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer style={{ background: '#1f2937', color: '#fff', padding: '40px 20px', marginTop: 'auto' }}>
            <div className="ml-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Contacto</h3>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Teléfono: 1234567890</p>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Email: contacto@ejemplo.com</p>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Ubicación: Calle Falsa 123, Ciudad</p>
                    <p
                        onClick={() => handleLink('/contacto')}
                        style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#60a5fa', cursor: 'pointer', fontWeight: 500 }}
                        onMouseOver={e => e.currentTarget.style.color = '#93bbfd'}
                        onMouseOut={e => e.currentTarget.style.color = '#60a5fa'}
                    >
                        → Ir a página de Contacto
                    </p>
                </div>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Sobre Nosotros</h3>
                    <p style={{ margin: '5px 0', fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                        Ofrecemos los mejores productos con la más alta calidad. Nuestro compromiso es brindarte la mejor experiencia de compra, con envíos rápidos y seguros.
                    </p>
                </div>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Ayuda</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li
                            style={linkStyle}
                            onClick={() => handleLink('/faq')}
                            onMouseOver={e => e.currentTarget.style.color = '#fff'}
                            onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}
                        >
                            Preguntas Frecuentes
                        </li>
                        <li
                            style={linkStyle}
                            onClick={() => handleLink('/envios')}
                            onMouseOver={e => e.currentTarget.style.color = '#fff'}
                            onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}
                        >
                            Envíos y Devoluciones
                        </li>
                        <li
                            style={linkStyle}
                            onClick={() => handleLink('/terminos')}
                            onMouseOver={e => e.currentTarget.style.color = '#fff'}
                            onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}
                        >
                            Términos y Condiciones
                        </li>
                        <li
                            style={linkStyle}
                            onClick={() => handleLink('/privacidad')}
                            onMouseOver={e => e.currentTarget.style.color = '#fff'}
                            onMouseOut={e => e.currentTarget.style.color = '#d1d5db'}
                        >
                            Política de Privacidad
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #374151', fontSize: '14px', color: '#9ca3af' }}>
                &copy; {new Date().getFullYear()} Tu logo. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
