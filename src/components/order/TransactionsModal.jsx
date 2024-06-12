import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import * as React from "react";
import {useState} from "react";

export default function TransactionsModal(props) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const [categoryId, setCategoryId] = useState('Default category Id');
    const [date, setDate] = useState(formattedDate);

    return (
        <form onSubmit={event => props.onClickSubmit(event)}>
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
                <Input type="number" name="amount"/>
            </FormControl>
            <FormControl required sx={{mt: 2}}>
                <FormLabel>Date</FormLabel>
                <Input type="date" name="transactionDate" value={date}
                       onChange={e => setDate(e.target.value)}/>
            </FormControl>
            <Stack gap={4} sx={{mt: 4}}>
                <Button type="submit">
                    {props.buttonText}
                </Button>
            </Stack>
        </form>
    )
}
