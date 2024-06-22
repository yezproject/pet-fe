import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Grid from "@mui/joy/Grid"
import Stack from "@mui/joy/Stack"

import AmountMoneyInput from "@/common/base/form/AmountMoneyInput"
import DateInput from "@/common/base/form/DateInput"
import TextInput from "@/common/base/form/TextInput.jsx"
import TimeInput from "@/common/base/form/TimeInput"
import { currentDateString, currentTimeString, dateToMillis } from "@/common/utils/time-utils.js"
import { useForm } from "react-hook-form"

export default function AddTransactionForm({ addTransaction }) {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
            amount: "",
            date: currentDateString(),
            time: currentTimeString()
        }
    })

    const onSubmit = (data) => {
        const transactionDate = `${data?.date}T${data?.time}`
        const transaction = {
            name: data?.name,
            amount: Number(data?.amount.replaceAll(",", "")),
            transactionDate: dateToMillis(transactionDate),
        }
        addTransaction(transaction)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <TextInput
                    control={control}
                    name="name"
                    label="Name"
                />
            </Box>
            <Box sx={{ mt: 2 }}>
                <AmountMoneyInput
                    control={control}
                    name="amount"
                    label="Amount of money"
                />
            </Box>

            <Grid container spacing={2} sx={{ flexGrow: 1, mt: 1, mb: 1 }}>
                <Grid xs>
                    <DateInput
                        control={control}
                        name="date"
                        label="Date"
                    />
                </Grid>
                <Grid xs>
                    <TimeInput
                        control={control}
                        name="time"
                        label="Time"
                    />
                </Grid>
            </Grid>

            <Stack gap={4} sx={{ mt: 4 }}>
                <Button type="submit">Add transaction</Button>
            </Stack>
        </form >
    )
}
