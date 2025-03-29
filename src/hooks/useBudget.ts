import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

// Hook
export const useBudget = () => {
    const context = useContext(BudgetContext)

    // Validar si el contexto existe
    if(!context) {
        throw new Error('useBudget must be used within a BudgetProvider')
    }

    return context
}
