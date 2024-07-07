import Sidebar from "@/layout/sidebar/Sidebar.jsx"
import Box from "@mui/joy/Box"
import CssBaseline from "@mui/joy/CssBaseline"
import Stack from "@mui/joy/Stack"
import { CssVarsProvider } from "@mui/joy/styles"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export default function MainPage() {
    const [menu, setMenu] = useState("Transaction")
    const updateMenu = (menuName) => {
        if (menuName && menuName.length > 0) {
            const captitalizeMenu = menuName.charAt(0).toUpperCase() + menuName.slice(1)
            setMenu(captitalizeMenu)
        }
    }
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Sidebar onChangeMenu={updateMenu} />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: "calc(12px + var(--Header-height))",
                            sm: "calc(12px + var(--Header-height))",
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 0,
                        height: "100dvh",
                        gap: 1,
                    }}
                >
                    <Stack
                        className="MainPage"
                        sx={{
                            height: "100%"
                        }}
                    >
                        <Outlet />
                    </Stack>
                </Box>
            </Box>
        </CssVarsProvider>
    )
}
