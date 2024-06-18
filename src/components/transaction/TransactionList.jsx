import BaseTable from "@/common/base/table/BaseTable"
import { thousandsNumber } from "@/common/constants/convert-number.js"
import { minisToDate } from "@/common/constants/covert-time.js"
import Box from "@mui/joy/Box"
import Typography from "@mui/joy/Typography"
import PropTypes from "prop-types"
import { memo } from "react"

export default memo(TransactionList)

function TransactionList({ transactions, menu }) {
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }

    const columns = [
        {
            name: "Name",
            valueGetter: (row) => (
                <Typography style={style}
                    level="body-xs"
                    title={row.name}>
                    {row.name}
                </Typography>
            )
        },
        {
            name: "Transaction time",
            valueGetter: (row) => (
                <Typography level="body-xs">{minisToDate(row.transactionDate)}</Typography>
            )
        },
        {
            name: "Category",
            valueGetter: (row) => (
                <Typography style={style}
                    level="body-xs"
                    title={row.categoryId}>
                    {row.categoryId}
                </Typography>
            )
        },
        {
            name: "Amount",
            valueGetter: (row) => (
                <Typography level="body-xs">{thousandsNumber(row.amount)}</Typography>
            )
        },
        {
            name: "Action",
            valueGetter: (row) => (
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {menu(row.id)}
                </Box>
            )
        }
    ]

    return (
        <>
            <BaseTable
                columns={columns}
                rows={transactions}
                rowKey="id"
                checkboxSelection={true}
            />
        </>
    )
}

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired
}
