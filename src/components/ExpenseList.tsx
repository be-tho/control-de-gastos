import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
    const {state} = useBudget()
    
    const filteredExpenses = state.currentCategoryId ? state.expenses.filter(expense => expense.category === state.currentCategoryId) : state.expenses
    
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])

    return (
        <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
                    {filteredExpenses.map(expense => (
                        <ExpenseDetail 
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
        </div>
    )
}