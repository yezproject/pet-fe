import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import Stack from "@mui/joy/Stack"
import Button from "@mui/joy/Button"

import { useState } from "react"

export default function AddTransactionsForm({ buttonText, onClickSubmit }) {
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split("T")[0]
    const [date, setDate] = useState(formattedDate)

    return (
        <form onSubmit={(event) => onClickSubmit(event)}>
            
            <FormControl required sx={{ mt: 2 }}>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" />
            </FormControl>
            <FormControl required sx={{ mt: 2 }}>
                <FormLabel>Amount</FormLabel>
                <Input type="number" name="amount" />
            </FormControl>
            <FormControl required sx={{ mt: 2 }}>
                <FormLabel>Date</FormLabel>
                <Input type="date" name="transactionDate" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            {/* <FormControl required>
                <FormLabel>Category</FormLabel>
                <Input
                    type="text"
                    name="categoryId"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                />
            </FormControl> */}
            <Stack gap={4} sx={{ mt: 4 }}>
                <Button type="submit">{buttonText}</Button>
            </Stack>
        </form>
    )
}
