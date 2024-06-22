import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"

import BaseMoreOption from "@/common/base/BaseMoreOption.jsx"
import BaseModal from "@/common/base/modal/BaseModal.jsx"
import AddTransactionForm from "@/components/transaction/AddTransactionForm.jsx"
import ModifyTransactionForm from "@/components/transaction/ModifyTransactionForm.jsx"
import TransactionFilter from "@/components/transaction/TransactionFilter.jsx"
import TransactionList from "@/components/transaction/TransactionList.jsx"
import { addTransaction, deleteTransactions, getTransactions, updateTransaction } from "@/services/join-service.js"
import { AddBox } from "@mui/icons-material"
import { useCallback, useEffect, useState } from "react"

export default function TransactionPage() {
    const [transactions, setTransactions] = useState([])
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openModifyModal, setOpenModifyModal] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState({})

    const menuItems = useCallback((row) => [
        { label: "Edit", action: () => handleEdit(row) },
        { label: "Delete", action: () => handleDelete(row.id) },
    ], [])

    const transactionAction = useCallback((id) => {
        return <BaseMoreOption menuItems={menuItems(id)} divider={["Move"]} />
    }, [])

    const fetchTransactions = () => {
        getTransactions().then((response) => {
            setTransactions(response.data)
        })
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    const onAddTransaction = async (newTransaction) => {
        const { status } = await addTransaction(newTransaction)
        if (status === 201) {
            fetchTransactions()
            setOpenAddModal(false)
        }
    }

    const onModifyTransaction = async (modifiedTransaction) => {
        const { status } = await updateTransaction(modifiedTransaction.id, modifiedTransaction)
        if (status === 204) {
            fetchTransactions()
            setOpenModifyModal(false)
        }
    }

    const handleDelete = async (itemId) => {
        const { status } = await deleteTransactions([itemId])
        if (status === 204) {
            setTransactions(transactions => transactions.filter(it => it.id !== itemId))
        }
    }

    const handleEdit = async (transaction) => {
        setSelectedTransaction(transaction)
        setOpenModifyModal(true)
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
                <Button color="primary" startDecorator={<AddBox />} size="sm" onClick={() => setOpenAddModal(true)}>
                    Add transaction
                </Button>
            </Box>
            <TransactionFilter />
            <TransactionList
                transactions={transactions}
                menu={transactionAction}
            />
            <BaseModal
                open={openAddModal}
                body={
                    <AddTransactionForm
                        addTransaction={(transaction) => onAddTransaction(transaction)}
                    />
                }
                title={"Add transaction"}
                onClose={() => setOpenAddModal(false)}
            />
            <BaseModal
                open={openModifyModal}
                body={
                    <ModifyTransactionForm
                        transaction={selectedTransaction}
                        modifyTransaction={(transaction) => onModifyTransaction(transaction)}
                    />
                }
                title={"Update transaction"}
                onClose={() => setOpenModifyModal(false)}
            />
        </Box>
    )
}
