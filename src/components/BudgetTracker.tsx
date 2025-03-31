import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTracker() {

    const { state, totalExpenses, remainigBudget, dispatch } = useBudget()
    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
                <CircularProgressbar
                    value={percentage}
                    maxValue={100}
                    text={`${Number(percentage)}% Gastado`}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#d1d5db',
                        textColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                        textSize: '10'
                    })}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white rounded-lg uppercase font-bold"
                    onClick={() => dispatch({type: 'reset-app'})}
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

