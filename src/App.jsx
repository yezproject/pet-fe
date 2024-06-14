import {Route, Routes} from "react-router-dom"
import React, {Suspense} from "react"

import Main from "@/layout/main/Main.jsx"
import Login from "@/components/login/Login.jsx"

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Suspense>
    )
}
