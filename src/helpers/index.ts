// Formatear un numero a moneda
export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount)
}

/**
 * Formatea una fecha
 * 
 * @param dateStr - Fecha en formato string
 * @returns Fecha formateada
 */
export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    //retornar en español
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}

