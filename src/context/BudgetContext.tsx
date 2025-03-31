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

// Crear el contexto
export const BudgetContext = createContext<BudgetContextProps>(null!)

// Crear el provider
export const BudgetProvider = ({ children }: BudgetProviderProps) =>{
    
    // Reducer
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    // Retornar el provider
    return (
        <BudgetContext.Provider
            value={{
                state: state || null,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}