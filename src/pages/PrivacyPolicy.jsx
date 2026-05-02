import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const s = { marginBottom: '28px' };
    const h = { fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '12px', marginTop: 0 };
    const t = { color: '#4b5563', lineHeight: '1.7', fontSize: '15px', margin: '0 0 10px 0' };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
            <Header />
            <main className="ml-container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '40px' }}>
                <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginBottom: '20px' }}>
                    <ArrowLeft size={16} /> Volver
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1f2937', marginTop: 0, marginBottom: '8px' }}>Política de Privacidad</h1>
                    <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '30px' }}>
                        Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div style={s}>
                        <h2 style={h}>1. Información que Recopilamos</h2>
                        <p style={t}>Al utilizar nuestro sitio, podemos recopilar la siguiente información personal:</p>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>Nombre completo</li>
                            <li style={{ marginBottom: '6px' }}>Número de teléfono</li>
                            <li style={{ marginBottom: '6px' }}>Dirección de envío (cuando aplica)</li>
                            <li style={{ marginBottom: '6px' }}>Datos de navegación (productos visitados, historial de búsqueda)</li>
                        </ul>
                    </div>

                    <div style={s}>
                        <h2 style={h}>2. Uso de la Información</h2>
                        <p style={t}>Utilizamos la información recopilada para:</p>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>Procesar y gestionar pedidos</li>
                            <li style={{ marginBottom: '6px' }}>Coordinar envíos y entregas</li>
                            <li style={{ marginBottom: '6px' }}>Mejorar la experiencia de compra en nuestro sitio</li>
                            <li style={{ marginBottom: '6px' }}>Comunicarnos con el cliente sobre su pedido</li>
                            <li style={{ marginBottom: '6px' }}>Cumplir con obligaciones legales</li>
                        </ul>
                    </div>

                    <div style={s}>
                        <h2 style={h}>3. Almacenamiento Local (Cookies y localStorage)</h2>
                        <p style={t}>
                            Nuestro sitio utiliza almacenamiento local (localStorage) del navegador para guardar información como el carrito de compras, historial de precios y productos visitados. Esta información se almacena exclusivamente en tu dispositivo y no es compartida con terceros. Podés eliminarla en cualquier momento desde la configuración de tu navegador.
                        </p>
                    </div>

                    <div style={s}>
                        <h2 style={h}>4. Protección de Datos</h2>
                        <p style={t}>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, ningún sistema de transmisión o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
                        </p>
                    </div>

                    <div style={s}>
                        <h2 style={h}>5. Compartición de Datos con Terceros</h2>
                        <p style={t}>
                            No vendemos, comercializamos ni transferimos tus datos personales a terceros, excepto cuando sea necesario para cumplir con la ley, hacer cumplir nuestras políticas, o proteger nuestros derechos o los de otros. Los servicios de terceros que utilizamos (como Firebase de Google para el almacenamiento de datos) cuentan con sus propias políticas de privacidad.
                        </p>
                    </div>

                    <div style={s}>
                        <h2 style={h}>6. Derechos del Usuario</h2>
                        <p style={t}>De acuerdo con la Ley N° 25.326 de Protección de Datos Personales, tenés derecho a:</p>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '6px' }}>Acceder a tus datos personales almacenados</li>
                            <li style={{ marginBottom: '6px' }}>Solicitar la rectificación de datos inexactos</li>
                            <li style={{ marginBottom: '6px' }}>Solicitar la supresión de tus datos</li>
                            <li style={{ marginBottom: '6px' }}>Oponerte al tratamiento de tus datos</li>
                        </ul>
                        <p style={t}>Para ejercer estos derechos, contactanos a través de nuestra página de contacto.</p>
                    </div>

                    <div style={s}>
                        <h2 style={h}>7. Menores de Edad</h2>
                        <p style={t}>Nuestro sitio no está dirigido a menores de 18 años. No recopilamos información de menores de edad de manera intencional.</p>
                    </div>

                    <div style={s}>
                        <h2 style={h}>8. Modificaciones a esta Política</h2>
                        <p style={t}>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
                    </div>

                    <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
                        <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>¿Preguntas sobre privacidad? <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 500 }} onClick={() => navigate('/contacto')}>Contactanos</span>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
