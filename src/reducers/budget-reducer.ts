import { v4 as uuidv4 } from 'uuid'

import { DraftExpense, Expense } from "../assets/types"

export type BudgetAction = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'hide-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } }

export type BudgetState = {
    budget: number
    showModal: boolean
    expenses: Expense[]
}

const createExpense = (draftExpense: DraftExpense) : Expense =>{
    return {
        ...draftExpense,
        id: uuidv4()
    }

}
        
export const initialState: BudgetState = {
    budget: 0,
    showModal: false,
    expenses: []
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

    // Agregar gasto
    if(action.type === 'add-expense') {

        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses : [...state.expenses, expense]
        }
    }
    
}