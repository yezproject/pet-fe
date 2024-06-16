import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"

import BaseMoreOption from "@/common/base/BaseMoreOption.jsx"
import BaseModal from "@/common/base/modal/BaseModal.jsx"
import { dateToMinis } from "@/common/constants/covert-time.js"
import AddTransactionsForm from "@/components/transaction/AddTransactionsForm.jsx"
import { addTransaction, deleteTransactions, getTransactions } from "@/services/join-service.js"
import { AddBox } from "@mui/icons-material"
import { useEffect, useState } from "react"
import TransactionList from "@/components/transaction/TransactionList.jsx"
import TransactionFilter from "@/components/transaction/TransactionFilter.jsx"

export default function TransactionPage() {
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
                <Typography level="h2" component="h1">
                    Transaction
                </Typography>
                <Button color="primary" startDecorator={<AddBox />} size="sm" onClick={() => setOpenModal(true)}>
                    Add transaction
                </Button>
            </Box>
            <TransactionFilter />
            <TransactionList
                rows={transactions}
                menu={(id) => <BaseMoreOption menuItems={menuItems(id)} divider={divider} />}
            />
            <BaseModal
                open={openModal}
                body={
                    <AddTransactionsForm
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
