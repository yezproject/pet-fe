import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"

import BaseTableMenu from "@/common/base/table/BaseTableMenu.jsx"
import BaseModal from "@/common/base/modal/BaseModal.jsx"
import AddTransactionForm from "@/components/transaction/AddTransactionForm.jsx"
import ModifyTransactionForm from "@/components/transaction/ModifyTransactionForm.jsx"
import TransactionFilter from "@/components/transaction/TransactionFilter.jsx"
import TransactionList from "@/components/transaction/TransactionList.jsx"
import transactionService from "@/services/transaction-service.js"
import { AddBox } from "@mui/icons-material"
import { useCallback, useEffect, useState } from "react"

export default function TransactionPage() {
    const [transactions, setTransactions] = useState([])
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openModifyModal, setOpenModifyModal] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState({})

    const transactionAction = useCallback((row) => {
        return <BaseTableMenu
            menuItems={[
                { label: "Update", action: () => onClickUpdate(row) },
                { label: "Delete", action: () => onClickDelete(row.id) },
            ]}/>
    }, [])

    const fetchTransactions = () => {
        transactionService.getTransactions().then((response) => {
            setTransactions(response.data)
        })
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    const onAddTransaction = async (newTransaction) => {
        const { status } = await transactionService.addTransaction(newTransaction)
        if (status === 201) {
            fetchTransactions()
            setOpenAddModal(false)
        }
    }

    const onModifyTransaction = async (modifiedTransaction) => {
        const { status } = await transactionService.updateTransaction(modifiedTransaction.id, modifiedTransaction)
        if (status === 204) {
            fetchTransactions()
            setOpenModifyModal(false)
        }
    }

    const onClickDelete = async (itemId) => {
        const { status } = await transactionService.deleteTransactions([itemId])
        if (status === 204) {
            setTransactions(transactions => transactions.filter(it => it.id !== itemId))
        }
    }

    const onClickUpdate = async (transaction) => {
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
