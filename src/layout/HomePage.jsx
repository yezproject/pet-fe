import { Box, Typography } from "@mui/joy"

import MainBreadcrumbs from "@/components/MainBreadcrumbs"

export default function Home() {
    return (
        <Box
            component="main"
            className="MainContent"
            sx={{
                px: 2,
                pt: "65px",
                pb: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                height: "100dvh",
                gap: 1,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <MainBreadcrumbs breadcrumbTexts={["Dashboard"]} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    mb: 1,
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "start", sm: "center" },
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Typography level="h2">
                    Dashboard
                </Typography>
            </Box>
        </Box>
    )
}
