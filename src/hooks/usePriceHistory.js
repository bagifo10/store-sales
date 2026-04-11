/**
 * usePriceHistory - Gestión de historial de precios y productos vistos en localStorage
 *
 * Estructura localStorage:
 *   - "priceHistory": { [productId]: [{ price, date }] }  → historial de precios
 *   - "viewedProducts": [{ id, name, imageUrl, price, category, viewedAt }]  → últimos 15 días
 */

const PRICE_HISTORY_KEY = 'priceHistory';
const VIEWED_PRODUCTS_KEY = 'viewedProducts';
const DAYS_15 = 15 * 24 * 60 * 60 * 1000; // 15 días en ms

// ─── Price History ───────────────────────────────────────────────────────────

/** Devuelve el historial de precios completo */
export function getPriceHistory() {
    try {
        return JSON.parse(localStorage.getItem(PRICE_HISTORY_KEY)) || {};
    } catch {
        return {};
    }
}

/**
 * Registra el precio actual de un producto.
 * Solo agrega una entrada si el precio cambió respecto al último registro.
 */
export function recordPrice(productId, price) {
    const history = getPriceHistory();
    const entries = history[productId] || [];

    const now = Date.now();
    const lastEntry = entries[entries.length - 1];

    // Solo guardar si el precio cambió o no hay registros
    if (!lastEntry || lastEntry.price !== price) {
        entries.push({ price, date: now });
    }

    // Limpiar entradas más viejas de 15 días
    const filtered = entries.filter(e => now - e.date <= DAYS_15);
    history[productId] = filtered;

    localStorage.setItem(PRICE_HISTORY_KEY, JSON.stringify(history));
}

/**
 * Devuelve el precio anterior (antes de la baja) de un producto si bajó en los últimos 15 días.
 * Retorna null si no hay bajada de precio.
 */
export function getPreviousPriceIfDiscounted(productId, currentPrice) {
    const history = getPriceHistory();
    const entries = history[productId] || [];

    if (entries.length < 2) return null;

    // Buscar el precio máximo registrado en los últimos 15 días (excluyendo el actual)
    const previousEntries = entries.slice(0, -1); // todos menos el último
    const maxPrevPrice = Math.max(...previousEntries.map(e => e.price));

    if (maxPrevPrice > currentPrice) {
        return maxPrevPrice;
    }
    return null;
}

/**
 * Verifica si un producto tiene oferta (precio bajó en últimos 15 días).
 * Retorna { hasDiscount: bool, previousPrice: number|null, discountPct: number|null }
 */
export function getDiscountInfo(productId, currentPrice) {
    const previousPrice = getPreviousPriceIfDiscounted(productId, currentPrice);
    if (!previousPrice) return { hasDiscount: false, previousPrice: null, discountPct: null };

    const discountPct = Math.round(((previousPrice - currentPrice) / previousPrice) * 100);
    return { hasDiscount: true, previousPrice, discountPct };
}

// ─── Viewed Products (Historial) ─────────────────────────────────────────────

/** Devuelve todos los productos vistos en los últimos 15 días */
export function getViewedProducts() {
    try {
        const raw = JSON.parse(localStorage.getItem(VIEWED_PRODUCTS_KEY)) || [];
        const now = Date.now();
        return raw.filter(p => now - p.viewedAt <= DAYS_15);
    } catch {
        return [];
    }
}

/**
 * Registra un producto como visto.
 * Actualiza la fecha si ya existe, y lo mueve al principio de la lista.
 */
export function recordViewedProduct(product) {
    if (!product || !product.id) return;

    const viewed = getViewedProducts();
    const now = Date.now();

    // Remover si ya existe (para "refrescarlo" al tope)
    const filtered = viewed.filter(p => p.id !== product.id);

    // Agregar al inicio con timestamp
    const entry = {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl || '',
        price: product.price,
        category: product.category || '',
        viewedAt: now,
    };

    const updated = [entry, ...filtered].slice(0, 50); // máximo 50 productos
    localStorage.setItem(VIEWED_PRODUCTS_KEY, JSON.stringify(updated));
}
