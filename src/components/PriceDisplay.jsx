/**
 * PriceDisplay - Componente para mostrar el precio actual y, si hay descuento,
 * el precio anterior tachado.
 *
 * Props:
 *   - productId: string
 *   - currentPrice: number
 *   - size: 'sm' | 'md' | 'lg'  (controla tamaño de fuente)
 *   - showBadge: bool  (si muestra la etiqueta de % descuento)
 */

import { getDiscountInfo } from '../hooks/usePriceHistory';
import { formatPrice } from '../utils/formatPrice';

const SIZES = {
    sm: { current: '18px', previous: '13px' },
    md: { current: '24px', previous: '15px' },
    lg: { current: '36px', previous: '18px' },
};

const PriceDisplay = ({ productId, currentPrice, size = 'md', showBadge = true }) => {
    const { hasDiscount, previousPrice, discountPct } = getDiscountInfo(productId, currentPrice);
    const { current: currentSize, previous: prevSize } = SIZES[size] || SIZES.md;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {hasDiscount && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                        style={{
                            textDecoration: 'line-through',
                            color: '#999',
                            fontSize: prevSize,
                            fontWeight: 400,
                        }}
                    >
                        ${formatPrice(previousPrice)}
                    </span>
                    {showBadge && (
                        <span style={{
                            background: '#00a650',
                            color: 'white',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            letterSpacing: '0.3px',
                        }}>
                            -{discountPct}%
                        </span>
                    )}
                </div>
            )}
            <span
                style={{
                    fontSize: currentSize,
                    fontWeight: size === 'lg' ? 300 : 500,
                    color: hasDiscount ? '#00a650' : '#333',
                    lineHeight: 1.1,
                }}
            >
                ${formatPrice(currentPrice)}
            </span>
        </div>
    );
};

export default PriceDisplay;
