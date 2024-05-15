import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import Header from "@/layout/header/Header";
import Main from "@/layout/main/Main";
import Sidebar from "@/layout/sidebar/Sidebar.jsx";

export default function App() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Header />
                <Sidebar />
                <Main />
            </Box>
        </CssVarsProvider>
    );
}
