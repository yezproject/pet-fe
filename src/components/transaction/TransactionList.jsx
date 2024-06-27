import BaseTable from "@/common/base/table/BaseTable"
import { thousandsNumber } from "@/common/constants/convert-number.js"
import { millisToDate } from "@/common/utils/time-utils.js"
import Box from "@mui/joy/Box"
import Typography from "@mui/joy/Typography"
import PropTypes from "prop-types"
import { memo, useEffect, useState } from "react"

const TransactionList = memo(({ transactions, categories, menu }) => {
    const [categoryMap, setCategoryMap] = useState(null)
    
    useEffect(() => {
        if (categories && categories.length > 0) {
            const map = new Map()
            for (const category of categories) {
                map.set(category.id, category)
            }
            setCategoryMap(map)
        }
    }, [categories])

    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
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
                <Typography level="body-xs">{millisToDate(row.transactionDate)}</Typography>
            )
        },
        {
            name: "Category",
            valueGetter: (row) => (
                <Typography style={style}
                    level="body-xs"
                    title={row.categoryId}>
                    {categoryMap ? categoryMap.get(row.categoryId)?.name : row.categoryId}
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
                    {menu(row)}
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
})

export default TransactionList
