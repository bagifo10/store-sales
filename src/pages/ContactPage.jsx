import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

/* SVG silueta tipo WhatsApp bloqueado */
const AvatarSilhouette = () => (
    <svg viewBox="0 0 200 200" width="200" height="200" style={{ display: 'block' }}>
        <rect width="200" height="200" rx="100" fill="#e5e7eb" />
        <circle cx="100" cy="78" r="34" fill="#9ca3af" />
        <ellipse cx="100" cy="170" rx="55" ry="48" fill="#9ca3af" />
    </svg>
);

const ContactPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // JS Validation to ensure constraints are respected and notify user
        if (form.name.trim().length < 2) {
            alert("El nombre debe tener al menos 2 caracteres.");
            return;
        }
        if (!/^\d{7,15}$/.test(form.phone.replace(/[\s\-+]/g, ''))) {
            alert("Ingresá un teléfono válido (solo números, 7-15 dígitos).");
            return;
        }
        if (form.message.trim().length < 5) {
            alert("El mensaje debe tener al menos 5 caracteres.");
            return;
        }

        setSending(true);
        // Simulamos envío (en una app real sería un endpoint o emailjs)
        setTimeout(() => {
            setSending(false);
            setSent(true);
        }, 1200);
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        fontSize: '15px',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        fontFamily: 'inherit',
        color: '#333',
        background: '#fff',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: '#374151',
        marginBottom: '6px',
    };

    const socialBtn = (bg) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500,
        color: '#fff',
        background: bg,
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
    });

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
            <Header />
            <main className="ml-container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '40px' }}>
                <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginBottom: '20px' }}>
                    <ArrowLeft size={16} /> Volver
                </div>

                <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    {/* Banner header */}
                    <div style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', padding: '40px', color: 'white', textAlign: 'center' }}>
                        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 700 }}>Contactanos</h1>
                        <p style={{ margin: 0, fontSize: '15px', opacity: 0.9 }}>Estamos para ayudarte. Escribinos y te respondemos a la brevedad.</p>
                    </div>

                    {/* Content: foto + formulario */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '40px', gap: '40px' }}>
                        {/* Columna izquierda: avatar + info */}
                        <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                            <div style={{ borderRadius: '50%', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: '4px solid #e5e7eb' }}>
                                <AvatarSilhouette />
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>Tu logo</h3>
                                <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Tienda Online</p>
                            </div>

                            {/* Info de contacto */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f9fafb', borderRadius: '10px' }}>
                                    <Phone size={18} color="#2563eb" />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Teléfono</div>
                                        <div style={{ fontSize: '14px', color: '#1f2937' }}>1234567890</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f9fafb', borderRadius: '10px' }}>
                                    <Mail size={18} color="#2563eb" />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Email</div>
                                        <div style={{ fontSize: '14px', color: '#1f2937' }}>contacto@ejemplo.com</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f9fafb', borderRadius: '10px' }}>
                                    <MapPin size={18} color="#2563eb" />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Ubicación</div>
                                        <div style={{ fontSize: '14px', color: '#1f2937' }}>Calle Falsa 123, Ciudad</div>
                                    </div>
                                </div>
                            </div>

                            {/* Redes sociales */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={socialBtn('#1877f2')}
                                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Facebook size={18} /> Facebook
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={socialBtn('linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)')}
                                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Instagram size={18} /> Instagram
                                </a>
                                <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" style={socialBtn('#25D366')}
                                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <MessageCircle size={18} /> WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Columna derecha: formulario */}
                        <div style={{ flex: '2 1 350px' }}>
                            {sent ? (
                                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                        <Send size={32} color="#059669" />
                                    </div>
                                    <h2 style={{ margin: '0 0 8px', color: '#1f2937', fontSize: '22px' }}>¡Mensaje enviado!</h2>
                                    <p style={{ color: '#6b7280', fontSize: '15px', margin: '0 0 24px' }}>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                                    <button
                                        onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                                        style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '15px', cursor: 'pointer', fontWeight: 500 }}
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h2 style={{ margin: '0 0 24px', fontSize: '20px', fontWeight: 600, color: '#1f2937' }}>Envianos un mensaje</h2>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                                        <div>
                                            <label style={labelStyle}>Nombre Completo *</label>
                                            <input name="name" value={form.name} onChange={handleChange} required minLength={2} maxLength={100} style={inputStyle} placeholder="Juan Pérez"
                                                onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                                                onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Teléfono *</label>
                                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required pattern="[0-9+\-\s]{7,20}" maxLength={20} style={inputStyle} placeholder="1123456789"
                                                onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                                                onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                                        <div>
                                            <label style={labelStyle}>Email *</label>
                                            <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="juan@email.com"
                                                onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                                                onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Asunto</label>
                                            <input name="subject" value={form.subject} onChange={handleChange} style={inputStyle} placeholder="Consulta sobre producto..."
                                                onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                                                onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '24px' }}>
                                        <label style={labelStyle}>Mensaje *</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} required minLength={5} maxLength={1000} rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} placeholder="Escribí tu consulta acá..."
                                            onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'; }}
                                            onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={sending}
                                        style={{
                                            width: '100%',
                                            padding: '14px',
                                            background: sending ? '#93c5fd' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '10px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            cursor: sending ? 'not-allowed' : 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            transition: 'background 0.2s, transform 0.1s',
                                        }}
                                    >
                                        {sending ? 'Enviando...' : <><Send size={18} /> Enviar mensaje</>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
