import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { budgetReducer, BudgetState, initialState, BudgetAction } from "../reducers/budget-reducer"

// Contexto
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetAction>
    totalExpenses: number
    remainigBudget: number
}

// Props del provider
type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

// Crear el provider
export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState) as [BudgetState, Dispatch<BudgetAction>]
    const totalExpenses = useMemo(() => state.expenses.reduce((acc, expense) => acc + expense.amount, 0), [state.expenses])
    const remainigBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainigBudget }}>
            {children}
        </BudgetContext.Provider>
    )
}