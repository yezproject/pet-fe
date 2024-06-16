import { Box, Typography } from "@mui/joy"

import MainBreadcrumbs from "@/components/MainBreadcrumbs"
import Chart from "react-apexcharts"

export default function Home() {
    const state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ["A", "B", "C", "D", "E"]
    }

    return (
        <Box>
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
                    Home
                </Typography>
            </Box>

            <Box>
                <div className="donut">
                    <Chart options={state.options} series={state.series} type="donut" width="380" />
                </div>
            </Box>
        </Box>
    )
}
