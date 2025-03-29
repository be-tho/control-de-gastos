import { useState } from "react"

export default function BudgetForm() {
    const [budget, setBudget] = useState(0)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(e.target.value))
    }

  return (
    <form className="space-y-5">
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-600 text-center font-bold">
                Definir Presupuesto
            </label>
            <input 
                id="budget"
                type="number" 
                className="w-full bg-white p-2 border border-gray-300 rounded-md" 
                placeholder="Añade tu presupuesto"
                name="budget"
                value={budget}
                onChange={handleChange}
            />
        </div>
        <input 
            type="submit" 
            value="Añadir Presupuesto" 
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white w-full p-2 font-black uppercase rounded-md"
        />
    </form>
  )
}