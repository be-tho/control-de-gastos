import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

/**
 * Muestra una cantidad formateada como moneda
 * 
 * @param {{label?: string, amount: number}} props          
 * @prop {string} [label] Etiqueta para la cantidad
 * @prop {number} amount Cantidad a mostrar
 * 
 * @returns {JSX.Element} Un <p> con el texto de la cantidad formateada
 */
export default function AmountDisplay({label, amount}: AmountDisplayProps) {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label && `${label}: `}
            <span className="font-black text-black">
                {formatCurrency(amount)}
            </span>
        </p>
    )
}

