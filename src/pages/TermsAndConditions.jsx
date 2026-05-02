import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        marginBottom: '28px',
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '12px',
        marginTop: 0,
    };

    const textStyle = {
        color: '#4b5563',
        lineHeight: '1.7',
        fontSize: '15px',
        margin: '0 0 10px 0',
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
            <Header />
            <main className="ml-container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '40px' }}>
                {/* Breadcrumb */}
                <div
                    onClick={() => navigate(-1)}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', cursor: 'pointer', fontSize: '14px', marginBottom: '20px' }}
                >
                    <ArrowLeft size={16} /> Volver
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1f2937', marginTop: 0, marginBottom: '8px' }}>
                        Términos y Condiciones
                    </h1>
                    <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '30px' }}>
                        Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>1. Aceptación de los Términos</h2>
                        <p style={textStyle}>
                            Al acceder y utilizar este sitio web, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice nuestro sitio. El uso continuado del sitio constituye la aceptación de cualquier modificación posterior a estos términos.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>2. Descripción del Servicio</h2>
                        <p style={textStyle}>
                            Nuestra plataforma es una tienda online que permite la compra de productos diversos. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento y sin previo aviso.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>3. Registro y Cuenta de Usuario</h2>
                        <p style={textStyle}>
                            Para realizar compras, no es necesario crear una cuenta. Sin embargo, al proporcionar sus datos personales durante el proceso de compra, usted garantiza que la información proporcionada es veraz, exacta y completa. Es su responsabilidad mantener la confidencialidad de cualquier dato de acceso que le sea proporcionado.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>4. Productos y Precios</h2>
                        <p style={textStyle}>
                            Realizamos el mayor esfuerzo posible para mostrar las características y precios de los productos de manera precisa. Sin embargo, no garantizamos que las descripciones, fotos o precios estén libres de errores. Nos reservamos el derecho de corregir cualquier error y de actualizar precios sin previo aviso. Los precios están expresados en Pesos Argentinos (ARS) e incluyen IVA salvo que se indique lo contrario.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>5. Proceso de Compra</h2>
                        <p style={textStyle}>
                            Al realizar un pedido a través de nuestro sitio, usted está realizando una oferta de compra del producto seleccionado. Nos reservamos el derecho de aceptar o rechazar cualquier pedido por razones de disponibilidad de stock, errores en la información del producto o precio, o por sospecha de actividad fraudulenta. La confirmación del pedido se realizará mediante la coordinación a través de WhatsApp.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>6. Métodos de Pago</h2>
                        <p style={textStyle}>
                            Aceptamos los métodos de pago indicados en nuestro sitio durante el proceso de checkout (efectivo, transferencia bancaria, entre otros). El pago debe realizarse en su totalidad antes de la entrega del producto, salvo acuerdo contrario. En caso de transferencia, la confirmación del pago estará sujeta a la acreditación de los fondos.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>7. Envíos y Entregas</h2>
                        <p style={textStyle}>
                            Los plazos de entrega son estimativos y pueden variar según la ubicación geográfica y la disponibilidad del producto. No nos responsabilizamos por demoras causadas por fuerza mayor, condiciones climáticas, problemas logísticos de terceros o cualquier causa fuera de nuestro control. Para más información, consulte nuestra sección de <span style={{ color: '#2563eb', cursor: 'pointer' }} onClick={() => navigate('/envios')}>Envíos y Devoluciones</span>.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>8. Devoluciones y Garantía</h2>
                        <p style={textStyle}>
                            El comprador tiene derecho a devolver el producto dentro de los 10 (diez) días corridos desde la recepción, conforme a lo establecido por la Ley de Defensa del Consumidor N° 24.240. El producto debe ser devuelto en las mismas condiciones en que fue recibido, sin uso y con su embalaje original. Los gastos de devolución corren por cuenta del comprador, salvo que el producto presente fallas de fábrica.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>9. Propiedad Intelectual</h2>
                        <p style={textStyle}>
                            Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad nuestra o de nuestros proveedores de contenido y está protegido por las leyes de propiedad intelectual de la República Argentina y tratados internacionales.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>10. Protección de Datos Personales</h2>
                        <p style={textStyle}>
                            Nos comprometemos a proteger la privacidad de nuestros usuarios conforme a la Ley de Protección de Datos Personales N° 25.326. Para conocer cómo recopilamos, usamos y protegemos sus datos, consulte nuestra <span style={{ color: '#2563eb', cursor: 'pointer' }} onClick={() => navigate('/privacidad')}>Política de Privacidad</span>.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>11. Limitación de Responsabilidad</h2>
                        <p style={textStyle}>
                            En la medida máxima permitida por la ley aplicable, no seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo la pérdida de beneficios, datos, uso u otra pérdida intangible, que resulte del uso o la imposibilidad de usar el servicio.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>12. Legislación Aplicable y Jurisdicción</h2>
                        <p style={textStyle}>
                            Estos términos y condiciones se rigen por las leyes de la República Argentina. Cualquier controversia derivada del uso de este sitio web será sometida a los tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires, o del domicilio del consumidor a su elección, renunciando a cualquier otro fuero que pudiere corresponder.
                        </p>
                    </div>

                    <div style={sectionStyle}>
                        <h2 style={titleStyle}>13. Modificaciones</h2>
                        <p style={textStyle}>
                            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia desde el momento de su publicación en este sitio. Es responsabilidad del usuario revisar periódicamente estos términos.
                        </p>
                    </div>

                    <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
                        <p style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>
                            Si tiene alguna pregunta sobre estos términos y condiciones, no dude en <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 500 }} onClick={() => navigate('/contacto')}>contactarnos</span>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
