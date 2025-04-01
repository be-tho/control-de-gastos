import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"


export default function FilterByCategory() {
    const {dispatch} = useBudget()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'filter-by-category', payload: { id: e.target.value }})
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form action="">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <label htmlFor="category" className="text-gray-600 text-2xl font-bold my-5">Filtrar Gastos</label>
                    <select 
                    id="category" 
                    className="w-full border border-gray-300 rounded-lg p-3"
                    onChange={handleChange}
                    >
                        <option value="">Todas las Categorías</option>
                        {categories.map(category => (
                            <option
                                value={category.id}
                                key={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}