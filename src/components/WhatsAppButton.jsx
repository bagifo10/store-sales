import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    // ATENCIÓN: Cambiar este número. Debe coincidir con el de Checkout.jsx u otro que prefieras para consultas. 
    // Debe incluir código de país sin el símbolo '+'. Ej: 5491100000000
    const WHATSAPP_NUMBER = "5491100000000"; 
    
    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50px',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                zIndex: 1000,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
