import * as React from "react"
import { CssVarsProvider } from "@mui/joy/styles"
import CssBaseline from "@mui/joy/CssBaseline"
import Box from "@mui/joy/Box"
import Header from "@/layout/header/Header.jsx"
import Sidebar from "@/layout/sidebar/Sidebar.jsx"
import { Navigate, Route, Routes } from "react-router-dom"
import { getToken } from "@/common/storage/local-storage.js"

const Order = React.lazy(() => import("@/components/order/Order.jsx"))
const Profile = React.lazy(() => import("@/components/profile/Profile.jsx"))

export default function Main() {
    if (!getToken()) return (
        <Navigate to="/" />
    )

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Order />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Box>
        </CssVarsProvider>
    )
}
