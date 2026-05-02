import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Truck, RotateCcw, Clock, Shield } from 'lucide-react';

const ShippingReturns = () => {
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const s = { marginBottom: '28px' };
    const h = { fontSize: '18px', fontWeight: 600, color: '#1f2937', marginBottom: '12px', marginTop: 0 };
    const t = { color: '#4b5563', lineHeight: '1.7', fontSize: '15px', margin: '0 0 10px 0' };
    const card = { background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'flex-start', gap: '16px' };
    const ib = (c) => ({ background: c, borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 });

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
            <Header />
            <main className="ml-container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '40px' }}>
                <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginBottom: '20px' }}>
                    <ArrowLeft size={16} /> Volver
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1f2937', marginTop: 0, marginBottom: '24px' }}>Envíos y Devoluciones</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '30px' }}>
                    <div style={card}><div style={ib('#dbeafe')}><Truck size={24} color="#2563eb" /></div><div><h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600 }}>Envío a domicilio</h3><p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Entrega en tu hogar</p></div></div>
                    <div style={card}><div style={ib('#fef3c7')}><Clock size={24} color="#d97706" /></div><div><h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600 }}>Retiro en local</h3><p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Sin costo adicional</p></div></div>
                    <div style={card}><div style={ib('#d1fae5')}><RotateCcw size={24} color="#059669" /></div><div><h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600 }}>Devoluciones</h3><p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>10 días para cambio</p></div></div>
                    <div style={card}><div style={ib('#ede9fe')}><Shield size={24} color="#7c3aed" /></div><div><h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600 }}>Compra protegida</h3><p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Siempre segura</p></div></div>
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                    <div style={s}>
                        <h2 style={h}>Opciones de Envío</h2>
                        <p style={t}>Ofrecemos las siguientes modalidades:</p>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Retiro en local:</strong> Sin costo. Avisaremos cuando esté listo. Lunes a Viernes 9 a 18 hs, Sábados 9 a 13 hs.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Envío a domicilio:</strong> Disponible en el área de cobertura. Costo calculado en el checkout.</li>
                        </ul>
                    </div>
                    <div style={s}>
                        <h2 style={h}>Plazos de Entrega</h2>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Retiro:</strong> 24 a 48 hs hábiles tras confirmación de pago.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Envío local:</strong> 1 a 3 días hábiles.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Interior:</strong> 3 a 7 días hábiles (si aplica).</li>
                        </ul>
                        <p style={t}>Los plazos son estimativos y pueden variar por causas de fuerza mayor.</p>
                    </div>
                    <div style={s}>
                        <h2 style={h}>Seguimiento de tu Pedido</h2>
                        <p style={t}>Te enviaremos el número de seguimiento por WhatsApp para rastrear el envío en tiempo real.</p>
                    </div>
                    <div style={s}>
                        <h2 style={h}>Política de Devoluciones</h2>
                        <p style={t}>Según la Ley 24.240, tenés derecho a devolver el producto dentro de los <strong>10 días corridos</strong> desde su recepción.</p>
                        <p style={t}><strong>Condiciones:</strong></p>
                        <ul style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}>Producto sin uso y en condiciones originales.</li>
                            <li style={{ marginBottom: '8px' }}>Con accesorios, manuales y embalaje original.</li>
                            <li style={{ marginBottom: '8px' }}>Comprobante de compra o número de pedido.</li>
                        </ul>
                    </div>
                    <div style={s}>
                        <h2 style={h}>Procedimiento de Devolución</h2>
                        <ol style={{ ...t, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}>Contactanos indicando tu número de pedido y el motivo.</li>
                            <li style={{ marginBottom: '8px' }}>Te indicaremos cómo proceder.</li>
                            <li style={{ marginBottom: '8px' }}>Verificamos el producto y procesamos reembolso o cambio.</li>
                            <li style={{ marginBottom: '8px' }}>Reembolso en máximo 10 días hábiles por el mismo medio de pago.</li>
                        </ol>
                    </div>
                    <div style={s}>
                        <h2 style={h}>Productos con Fallas de Fábrica</h2>
                        <p style={t}>Los gastos de devolución corren por nuestra cuenta. Contactanos y coordinaremos el retiro y reemplazo.</p>
                    </div>
                    <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
                        <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>¿Dudas? <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 500 }} onClick={() => navigate('/contacto')}>Contactanos</span>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ShippingReturns;
