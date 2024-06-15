import Header from "@/layout/header/Header.jsx"
import Sidebar from "@/layout/sidebar/Sidebar.jsx"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded.js"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded.js"
import Box from "@mui/joy/Box"
import Breadcrumbs from "@mui/joy/Breadcrumbs"
import CssBaseline from "@mui/joy/CssBaseline"
import Link from "@mui/joy/Link"
import Typography from "@mui/joy/Typography"
import { CssVarsProvider } from "@mui/joy/styles"
import { Outlet } from "react-router-dom"

export default function MainPage() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Header />
                <Sidebar />

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
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Breadcrumbs
                            size="sm"
                            aria-label="breadcrumbs"
                            separator={<ChevronRightRoundedIcon fontSize="sm" />}
                            sx={{ pl: 0 }}
                        >
                            <Link underline="none" color="neutral" href="#some-link" aria-label="Home">
                                <HomeRoundedIcon />
                            </Link>
                            <Link underline="hover" color="neutral" href="#some-link" fontSize={12} fontWeight={500}>
                                Dashboard
                            </Link>
                            <Typography color="primary" fontWeight={500} fontSize={12}>
                                Transaction
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Outlet />
                </Box>
            </Box>
        </CssVarsProvider>
    )
}
