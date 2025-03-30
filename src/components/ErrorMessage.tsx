import type { ReactNode } from 'react'

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
    return (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3">
            {children}
        </p>    
    )
}