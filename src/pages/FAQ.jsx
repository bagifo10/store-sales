import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    { q: '¿Cómo realizo una compra?', a: 'Navegá por nuestro catálogo, elegí el producto que te interese y hacé clic en "Agregar al carrito". Luego, accedé al carrito, revisá tu pedido y completá el formulario de checkout con tus datos. Finalmente, coordinamos la entrega por WhatsApp.' },
    { q: '¿Cuáles son los métodos de pago disponibles?', a: 'Aceptamos efectivo y transferencia bancaria. El pago se coordina al momento de confirmar tu pedido por WhatsApp.' },
    { q: '¿Cuánto tarda en llegar mi pedido?', a: 'Si retirás en local: 24 a 48 hs hábiles. Envío local: 1 a 3 días hábiles. Envío al interior: 3 a 7 días hábiles. Los plazos son estimativos.' },
    { q: '¿Tiene costo el envío?', a: 'El retiro en local es sin costo. El envío a domicilio tiene un costo que se calcula en el momento de la compra según la zona de entrega.' },
    { q: '¿Puedo devolver un producto?', a: 'Sí. Tenés 10 días corridos desde la recepción para devolver el producto en sus condiciones originales, conforme a la Ley 24.240.' },
    { q: '¿Qué hago si mi producto llegó con fallas?', a: 'Contactanos inmediatamente por WhatsApp o desde nuestra página de contacto. Coordinamos el retiro sin costo y te enviamos un reemplazo o realizamos el reembolso.' },
    { q: '¿Cómo puedo rastrear mi pedido?', a: 'Una vez despachado tu pedido, te enviamos el número de seguimiento por WhatsApp para que lo rastrees en tiempo real.' },
    { q: '¿Los precios incluyen IVA?', a: 'Sí, todos los precios publicados en el sitio incluyen IVA salvo que se indique lo contrario.' },
    { q: '¿Puedo modificar o cancelar mi pedido?', a: 'Podés solicitar la modificación o cancelación de tu pedido contactándonos por WhatsApp antes de que sea despachado. Una vez enviado, se aplica la política de devoluciones.' },
    { q: '¿Tienen local físico?', a: 'Sí, contamos con un local donde podés retirar tus compras. La dirección y horarios de atención los encontrás en la sección de Contacto.' },
];

const FAQ = () => {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
            <Header />
            <main className="ml-container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '40px' }}>
                <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginBottom: '20px' }}>
                    <ArrowLeft size={16} /> Volver
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1f2937', marginTop: 0, marginBottom: '8px' }}>Preguntas Frecuentes</h1>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '30px' }}>Encontrá respuestas a las consultas más comunes</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {faqData.map((item, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', transition: 'box-shadow 0.2s', boxShadow: isOpen ? '0 2px 8px rgba(37,99,235,0.1)' : 'none' }}>
                                    <div
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', cursor: 'pointer', background: isOpen ? '#f0f4ff' : '#fff', transition: 'background 0.2s' }}
                                    >
                                        <span style={{ fontWeight: 500, fontSize: '15px', color: '#1f2937' }}>{item.q}</span>
                                        {isOpen ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#9ca3af" />}
                                    </div>
                                    {isOpen && (
                                        <div style={{ padding: '0 20px 18px 20px', background: '#f9fafb' }}>
                                            <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.7', fontSize: '14px' }}>{item.a}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
                        <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>¿No encontraste lo que buscabas? <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 500 }} onClick={() => navigate('/contacto')}>Contactanos</span>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQ;
