
export type BudgetAction = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'hide-modal' }

export type BudgetState = {
    budget: number
    showModal: boolean
}

        
export const initialState: BudgetState = {
    budget: 0,
    showModal: false
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetAction
) => {

    // Agregar el presupuesto
    if(action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    // Mostrar el modal
    if(action.type === 'show-modal') {
        return {
            ...state,
            showModal: true
        }
    }

    // Ocultar el modal
    if(action.type === 'hide-modal') {
        return {
            ...state,
            showModal: false
        }
    }
    
}