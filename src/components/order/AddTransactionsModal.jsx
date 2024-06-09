import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import * as React from "react";
import {useState} from "react";

export default function AddTransactionsModal() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const [categoryId, setCategoryId] = useState('default cate');
    const [date, setDate] = useState(formattedDate)
    const onAddTransactions = (e) => {
        e.preventDefault();
        const formElements = e.currentTarget.elements;
        const date = new Date(formElements.transactionDate.value);
        const milliseconds = date.getTime();
    }

    return (
        <form onSubmit={event => onAddTransactions(event)}>
            <FormControl required>
                <FormLabel>Category Id</FormLabel>
                <Input type="text" name="categoryId" value={categoryId}
                       onChange={e => setCategoryId(e.target.value)}/>
            </FormControl>
            <FormControl required sx={{mt: 2}}>
                <FormLabel>Transaction Name</FormLabel>
                <Input type="text" name="name"/>
            </FormControl>
            <FormControl required sx={{mt: 2}}>
                <FormLabel>Amount</FormLabel>
                <Input type="text" name="amount"/>
            </FormControl>
            <FormControl required sx={{mt: 2}}>
                <FormLabel>Date</FormLabel>
                <Input type="date" name="transactionDate" value={date}
                       onChange={e => setDate(e.target.value)}/>
            </FormControl>
            <Stack gap={4} sx={{mt: 4}}>
                <Button type="submit">
                    Confirm
                </Button>
            </Stack>
        </form>
    )
}
