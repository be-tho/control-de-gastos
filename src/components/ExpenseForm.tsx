import { categories } from "../data/categories"

export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                Nuevo gasto
            </legend>
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
                >
                    <option value="">-- Selecciona --</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <input 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer uppercase font-bold"
                value="Añadir Gasto"
                />
        </form>
    )
}
