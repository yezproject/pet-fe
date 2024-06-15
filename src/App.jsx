import React, { Suspense } from "react"
import PetRoutes from "@/PetRoutes.jsx"

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PetRoutes />
        </Suspense>
    )
}
