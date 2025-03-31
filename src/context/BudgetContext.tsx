import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { budgetReducer, BudgetState, initialState, BudgetAction } from "../reducers/budget-reducer"

// Contexto
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetAction>
}

// Props del provider
type BudgetProviderProps = {
    children: ReactNode
}

// Crear el contexto con valor inicial
const initialContext: BudgetContextProps = {
    state: initialState,
    dispatch: () => null
}

export const BudgetContext = createContext<BudgetContextProps>(initialContext)

// Crear el provider
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    // Explicitly type the state to ensure it's never undefined
    const [state, dispatch] = useReducer(budgetReducer, initialState) as [BudgetState, Dispatch<BudgetAction>]

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )
}