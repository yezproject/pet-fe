import Autocomplete from "@mui/joy/Autocomplete"
import AutocompleteOption from "@mui/joy/AutocompleteOption"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Grid from "@mui/joy/Grid"
import Stack from "@mui/joy/Stack"
import FormLabel from "@mui/joy/FormLabel"

import BaseAmountMoneyInput from "@/common/base/form/BaseAmountMoneyInput"
import BaseDateInput from "@/common/base/form/BaseDateInput"
import BaseTextInput from "@/common/base/form/BaseTextInput.jsx"
import BaseTimeInput from "@/common/base/form/BaseTimeInput"
import { currentDateString, currentTimeString, dateToMillis } from "@/common/utils/time-utils.js"
import useCategoryState from "@/state/use-category"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import categoryService from "@/services/category-service"
import { BaseAutocomplete } from "@/common/base/form/BaseAutocomplete"

export default function AddTransactionForm({ addTransaction }) {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
            amount: "",
            category: null,
            date: currentDateString(),
            time: currentTimeString()
        }
    })
    const categories = useCategoryState((state) => state.categories)

    useEffect(() => {
        if (!categories || categories.length === 0) {
            categoryService.getCategories()
        }
    }, [])

    const onSubmit = (data) => {
        const transactionDate = `${data?.date}T${data?.time}`
        const transaction = {
            name: data?.name,
            amount: Number(data?.amount.replaceAll(",", "")),
            transactionDate: dateToMillis(transactionDate),
            categoryId: data?.category?.id
        }
        addTransaction(transaction)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <BaseTextInput
                    control={control}
                    name="name"
                    label="Name"
                />
            </Box>
            <Box sx={{ mt: 2 }}>
                <BaseAutocomplete
                    control={control}
                    name="category"
                    label="Category"
                    options={categories}
                />
            </Box>
            <Box sx={{ mt: 2 }}>
                <BaseAmountMoneyInput
                    control={control}
                    name="amount"
                    label="Amount of money"
                />
            </Box>

            <Grid container spacing={2} sx={{ flexGrow: 1, mt: 1, mb: 1 }}>
                <Grid xs>
                    <BaseDateInput
                        control={control}
                        name="date"
                        label="Date"
                    />
                </Grid>
                <Grid xs>
                    <BaseTimeInput
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
