import { Box, Breadcrumbs, Link, Typography, Button } from "@mui/joy"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded"
import TransactionList from "@/components/transaction/TransactionList.jsx"

export default function Dashboard() {
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
                <Breadcrumbs
                    size="sm"
                    aria-label="breadcrumbs"
                    separator={<ChevronRightRoundedIcon fontSize="sm" />}
                    sx={{ pl: 0 }}
                >
                    <Link
                        underline="none"
                        color="neutral"
                        href="#some-link"
                        aria-label="Home"
                    >
                        <HomeRoundedIcon />
                    </Link>
                    <Link
                        underline="hover"
                        color="neutral"
                        href="#some-link"
                        fontSize={12}
                        fontWeight={500}
                    >
                        Dashboard
                    </Link>
                    <Typography color="primary" fontWeight={500} fontSize={12}>
                        Transaction
                    </Typography>
                </Breadcrumbs>
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
                <Typography level="h2" component="h1">
                    Transaction
                </Typography>
                <Button
                    color="primary"
                    startDecorator={<DownloadRoundedIcon />}
                    size="sm"
                >
                    Download PDF
                </Button>
            </Box>
            <TransactionList />
            {/* <OrderList /> */}
        </Box>
    )
}
