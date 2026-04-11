# Tienda Online E-Commerce

¡Bienvenido! Este proyecto está armado para que puedas vender tus productos automáticamente.

## ⚠️ ¡ATENCIÓN! PASOS ANTES DE USAR/VENDER

Antes de poner la tienda pública para que la gente compre, **tenés que cambiar 3 cosas clave**. 
Hacerlo es muy fácil.

Primero ve al archivo `src/store/Checkout.jsx` y arriba de todo en el componente vas a encontrar estas variables:

1. **Tu número de WhatsApp (`CONFIG_TELEFONO`):** 
   Acá vas a poner tu número para que te lleguen los mensajes cuando alguien finalice la compra. 
   Acordate de ponerlo **con el código del país**, sin el +. Por ejemplo, si estás en Argentina (54) y tu celular empieza con 911, ponés: `"5491100000000"`.

2. **Precios de Envío (`CONFIG_ENVIOS`):** 
   Yo te dejé puestos "Capital Federal ($3000)" y "Resto del país ($6000)" de ejemplo. Cambiá esos valores para que reflejen lo que vos querés cobrar de envío.

Luego, para el botón flotante de WhatsApp de consultas generales, ve al archivo `src/components/WhatsAppButton.jsx`:

3. **Número del Botón Flotante (`WHATSAPP_NUMBER`):**
   Cambia el número de teléfono con el formato internacional (al igual que en el checkout) para que los clientes puedan enviarte dudas directamente.

---

Una vez que cambies esos datos, podés subir la página a GitHub Pages como te expliqué, ¡y ya estás listo para recibir pedidos!
