import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
export default function BudgetTracker() {

    const { state, totalExpenses, remainigBudget } = useBudget()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
                <img src="/grafico.jpg" alt="Grafico de gastos" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white rounded-lg uppercase font-bold"
                >
                    Restablecer presupuesto
                </button>
                <AmountDisplay
                    label="Presupuesto"
                    amount={state.budget}
                />
                <AmountDisplay
                    label="Disponible"
                    amount={remainigBudget}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
            </div>
        </div>
    )
}

