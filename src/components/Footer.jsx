import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#1f2937', color: '#fff', padding: '40px 20px', marginTop: 'auto' }}>
            <div className="ml-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Contacto</h3>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Teléfono: 1234567890</p>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Email: contacto@ejemplo.com</p>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>Ubicación: Calle Falsa 123, Ciudad</p>
                </div>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Sobre Nosotros</h3>
                    <p style={{ margin: '5px 0', fontSize: '14px', color: '#d1d5db', lineHeight: '1.6' }}>
                        Ofrecemos los mejores productos con la más alta calidad. Nuestro compromiso es brindarte la mejor experiencia de compra, con envíos rápidos y seguros.
                    </p>
                </div>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#ea580c' }}>Ayuda</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#d1d5db' }}>
                        <li style={{ marginBottom: '8px', cursor: 'pointer' }}>Preguntas Frecuentes</li>
                        <li style={{ marginBottom: '8px', cursor: 'pointer' }}>Envíos y Devoluciones</li>
                        <li style={{ marginBottom: '8px', cursor: 'pointer' }}>Términos y Condiciones</li>
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
