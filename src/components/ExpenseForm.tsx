import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense, Value } from "../assets/types";
import ErrorMessage from "./ErrorMessage";
import { useBudget, totalExpenses, remainigBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date(),
    })

    const [error, setError] = useState('')
    const [previusAmount, setPreviusAmount] = useState(0)

    const { dispatch, state, remainigBudget } = useBudget()

    useEffect(() => {
        if(state.editingId){
            const editingExpense = state.expenses.filter( currenteExpense => currenteExpense.id === state.editingId)[0]
            setExpense(editingExpense)
            setPreviusAmount(editingExpense.amount)
        }
    }, [state.editingId])

    // Manejar cambio en los inputs
    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ["amount"].includes(name)
        
        setExpense({
            ...expense,
            [name]: isAmountField ? Number(value) : value
        })
    }

    // Manejar cambio en la fecha
    const handleChangeDate = (value : Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    // Manejar envio del formulario
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validar
        if(Object.values(expense).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        //validar que no me pase del limite
        if(expense.amount - previusAmount > remainigBudget) {
            setError('No puedes gastar más de lo que tienes disponible')
            return
        }

        //agregar gasto o actualizar gasto
        if(state.editingId) {
            dispatch({ type: 'update-expense', payload: {expense : {id : state.editingId, ...expense} } })
        } else {
            dispatch({ type: 'add-expense', payload: { expense } })
        }

        //resetear el formulario
        setExpense({
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date(),
        })

        setPreviusAmount(0)
    }


    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                {state.editingId ? 'Actualizar gasto' : 'Nuevo gasto'}
            </legend>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Nombre Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    className="border-2 border-gray-300 rounded-md p-2"
                    placeholder="Añade el nombre del gasto"
                    name="expenseName"
                    onChange={handleChange}
                    value={expense.expenseName}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount"
                    className="text-xl"
                >
                    Cantidad:
                </label>
                <input
                    type="number"
                    id="amount"
                    className="border-2 border-gray-300 rounded-md p-2"
                    placeholder="Añade la cantidad: ej 300"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="category"
                    className="text-xl"
                >
                    Categoría:
                </label>
                <select
                    id="category"
                    className="border-2 border-gray-300 rounded-md p-2"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">-- Selecciona --</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="fechagasto"
                    className="text-xl"
                >
                    Fecha Gasto:
                </label>
                <DatePicker
                    className="bg-slate-100 p-2 rounded-md"
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>
            <input 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer uppercase font-bold"
                value={state.editingId ? 'Actualizar Gasto' : 'Añadir Gasto'}
                />
        </form>
    )
}
