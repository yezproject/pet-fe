import Box from "@mui/joy/Box"
import Breadcrumbs from "@mui/joy/Breadcrumbs"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded.js"
import Link from "@mui/joy/Link"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded.js"
import Typography from "@mui/joy/Typography"
import Button from "@mui/joy/Button"
import * as React from "react"
import { useEffect, useState } from "react"
import { addTransaction, deleteTransactions, getTransactions } from "@/services/join-service.js"
import { AddBox } from "@mui/icons-material"
import BaseModal from "@/common/base/modal/BaseModal.jsx"
import TransactionsModal from "@/components/order/TransactionsModal.jsx"
import { dateToMinis } from "@/common/constants/covert-time.js"
import BaseMoreOption from "@/common/base/BaseMoreOption.jsx"

const BaseTable = React.lazy(() => import("@/common/base/table/BaseTable.jsx"))

export default function Order() {
    const [transactions, setTransactions] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState({})
    const menuItems = (id) => [
        { label: "Edit", action: () => handleEdit(id) },
        { label: "Rename", action: () => console.log("Rename clicked") },
        { label: "Move", action: () => console.log("Move clicked") },
        { label: "Delete", action: () => handleDelete(id) },
    ]
    const divider = ["Move"]

    useEffect(() => {
        getTransactions().then((data) => {
            setTransactions(data.data)
        })
    }, [])

    const onAddTransactions = async (e) => {
        e.preventDefault()
        const formElements = e.currentTarget.elements
        const formData = {
            categoryId: formElements.categoryId.value,
            name: formElements.name.value,
            amount: formElements.amount.value,
            transactionDate: dateToMinis(formElements.transactionDate.value),
        }
        const { data, status } = await addTransaction(formData)
        if (status === 201) {
            setTransactions([
                ...transactions,
                {
                    ...formData,
                    id: data.id,
                },
            ])
            setOpenModal(false)
        }
    }

    const handleDelete = async (itemId) => {
        const { status } = await deleteTransactions([itemId])
        console.log(status)
    }

    const handleEdit = async (itemId) => {
        setSelectedTransaction(transactions.filter((item) => item.id === itemId))
        setOpenModal(true)
    }

    return (
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
                        Orders
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
                    Orders
                </Typography>
                <Button color="primary" startDecorator={<AddBox />} size="sm" onClick={() => setOpenModal(true)}>
                    Add transactions
                </Button>
            </Box>
            <BaseTable
                rows={transactions}
                menu={(id) => <BaseMoreOption menuItems={menuItems(id)} divider={divider} />}
            />
            <BaseModal
                open={openModal}
                body={
                    <TransactionsModal
                        buttonText={"Add transaction"}
                        transaction={setSelectedTransaction}
                        onClickSubmit={(event) => onAddTransactions(event)}
                    />
                }
                title={"Add transaction"}
                setOpen={() => setOpenModal(false)}
            />
        </Box>
    )
}
