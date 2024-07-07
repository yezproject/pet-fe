import { Box, Typography } from "@mui/joy"

import Chart from "react-apexcharts"

export default function Home() {
    const state = {
        options: {},
        series: [
            {
                name: "",
                data: [[1324508400000, 34], [1324594800000, 54], [1326236400000, 43]]
            }
        ]
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

            <Box
                height={400}
                width={500}
                sx={{
                    border: "1px solid"
                }}>
                <Chart options={state.options} series={state.series} type="line" width="380" />
            </Box>
        </Box>
    )
}
