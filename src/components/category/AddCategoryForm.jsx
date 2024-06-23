import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Stack from "@mui/joy/Stack"

import TextInput from "@/common/base/form/TextInput.jsx"
import { useForm } from "react-hook-form"

export default function AddCategoryForm({ addCategory }) {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
        }
    })

    const onSubmit = (data) => {
        const category = {
            name: data?.name,
        }
        addCategory(category)
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

            <Stack gap={4} sx={{ mt: 4 }}>
                <Button type="submit">Add transaction</Button>
            </Stack>
        </form >
    )
}
