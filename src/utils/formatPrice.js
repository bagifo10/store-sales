export const formatPrice = (val) => {
    if (val === undefined || val === null || val === '') return '0';
    // Remove existing dots just in case it's already formatted, then convert to number
    const numericVal = Number(String(val).replace(/\./g, ''));
    if (isNaN(numericVal)) return val; // Fallback to original if not a number
    return numericVal.toLocaleString('es-AR');
};
